export interface TreeLink { source: string; target: string; dashed?: boolean }
export type Positions = Record<string, { x: number; y: number }>

const ROOT_W = 300 // certification and module root cards
const CARD_W = 240
const COL_GAP = 150 // horizontal gap between a parent card and its children (room for an edge label)
const ROW_H = 118 // vertical slot per leaf card
const MODULE_GAP = 70 // extra space between neighbouring module branches

/**
 * Balanced mind-map layout: the root sits at the origin, its children (the module roots) are split between the
 * right side (top to bottom) and the left side (bottom to top), so they read clockwise. Every branch is a tidy tree:
 * depth runs horizontally away from the root, siblings stack vertically and each parent is centered on its children,
 * which guarantees that no two cards overlap. The tree is the breadth-first spanning tree of the solid links
 * (dashed links are cross-module relations and never shape the layout).
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

  const modules = kids(rootId)
  // Split the modules so both sides hold about the same number of leaf rows.
  const total = modules.reduce((n, m) => n + leaves(m), 0)
  let acc = 0
  let split = modules.length
  for (let i = 0; i < modules.length; i++) {
    if (acc + leaves(modules[i]) / 2 > total / 2) { split = i; break }
    acc += leaves(modules[i])
  }
  const right = modules.slice(0, split) // top to bottom
  const left = modules.slice(split).reverse() // listed top to bottom, so the modules read bottom to top (clockwise)

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
  const side = (ids: string[], dir: 1 | -1) => {
    const h = ids.reduce((n, m) => n + leaves(m) * ROW_H, 0) + MODULE_GAP * (ids.length - 1)
    let top = -h / 2
    for (const m of ids) {
      const x = dir * (ROOT_W / 2 + COL_GAP + width(m) / 2)
      top = place(m, x, top, dir) + MODULE_GAP
    }
  }
  side(right, 1)
  side(left, -1)
  return pos
}
