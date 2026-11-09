export interface TreeLink { source: string; target: string; dashed?: boolean }
export type Positions = Record<string, { x: number; y: number }>

const ROOT_W = 300 // certification and module root cards
const CARD_W = 240
const COL_GAP = 150 // horizontal gap between a parent card and its children (room for an edge label)
const ROW_H = 118 // vertical slot per leaf card
const MODULE_GAP = 150 // extra space between neighbouring module branches
const MIN_ROOT_X = ROOT_W / 2 + COL_GAP // closest a module root may get to the vertical axis

/**
 * Circular mind map: the root sits at the origin and its children (the module roots) are split evenly between the
 * left side (top to bottom) and the right side (bottom to top), so Module 1 starts at the upper left and the modules
 * go round the center. Every branch is a tidy tree: depth runs horizontally away from the center, siblings stack
 * vertically and each parent is centered on its children. The module roots sit on a circle around the center and the
 * bands of rows on each side never overlap, so no two cards can overlap.
 * The tree is the breadth-first spanning tree of the solid links (dashed cross-module links never shape the layout).
 */
export function mindMapLayout(rootId: string, links: TreeLink[]): Positions {
  const children = new Map<string, string[]>()
  const seen = new Set([rootId])
  const queue = [rootId]
  const solid = links.filter((l) => !l.dashed)
  while (queue.length) {
    const id = queue.shift()!
    for (const l of solid) {
      const other = l.source === id ? l.target : l.target === id ? l.source : null
      if (!other || seen.has(other)) continue
      seen.add(other)
      queue.push(other)
      children.set(id, [...(children.get(id) ?? []), other])
    }
  }

  const kids = (id: string) => children.get(id) ?? []
  const leaves = (id: string): number => (kids(id).length ? kids(id).reduce((n, c) => n + leaves(c), 0) : 1)
  const width = (id: string) => (id === rootId || id.endsWith('-root') ? ROOT_W : CARD_W)
  const subtree = (id: string): string[] => [id, ...kids(id).flatMap(subtree)]

  const modules = kids(rootId)
  const half = Math.ceil(modules.length / 2)
  const left = modules.slice(0, half) // top to bottom
  const right = modules.slice(half).reverse() // listed top to bottom, so these modules read bottom to top

  // Lay out every branch on its own, with the top of its band at y = 0 and its root on the vertical axis.
  const pos: Positions = { [rootId]: { x: 0, y: 0 } }
  const place = (id: string, x: number, top: number, dir: 1 | -1): number => {
    const h = leaves(id) * ROW_H
    let y = top
    for (const c of kids(id)) {
      const cx = x + dir * (width(id) / 2 + COL_GAP + width(c) / 2)
      y = place(c, cx, y, dir)
    }
    pos[id] = { x, y: top + h / 2 }
    return top + h
  }
  const sides = [[left, -1], [right, 1]] as const
  for (const [ids, dir] of sides) for (const m of ids) place(m, 0, 0, dir)

  // Put the module roots on a circle. On each side the roots run from +67.5° (top) to -67.5° (bottom), so the ring
  // closes the same way at the top and at the bottom; the gap between two neighbouring roots grows with the height of
  // their branches, and the radius is the smallest one that still leaves MODULE_GAP between neighbouring bands.
  const TOP = Math.sin((67.5 * Math.PI) / 180)
  const needs = sides.map(([ids]) =>
    ids.slice(1).map((m, i) => leaves(ids[i]) * ROW_H - pos[ids[i]].y + MODULE_GAP + pos[m].y), // root-to-root distance
  )
  const radius = Math.max(...needs.map((n) => n.reduce((a, b) => a + b, 0) / (2 * TOP)))
  sides.forEach(([ids, dir], s) => {
    const spare = (2 * TOP - needs[s].reduce((a, b) => a + b, 0) / radius) / Math.max(1, ids.length - 1)
    let sin = ids.length > 1 ? TOP : 0
    ids.forEach((m, i) => {
      if (i > 0) sin -= needs[s][i - 1] / radius + spare
      const dx = dir * Math.max(MIN_ROOT_X, radius * Math.sqrt(1 - sin * sin))
      const dy = -radius * sin - pos[m].y
      for (const id of subtree(m)) pos[id] = { x: pos[id].x + dx, y: pos[id].y + dy }
    })
  })
  return pos
}
