export interface Rect { id: string; x: number; y: number; w: number; h: number } // top-left origin

export type Side = 'top' | 'bottom' | 'left' | 'right'

export interface Route {
  sx: number; sy: number; tx: number; ty: number
  sourcePosition: Side; targetPosition: Side
  centerX?: number; centerY?: number
  offset?: number // clearance used when both ends leave through the same side (U-shaped detour)
  label: { x: number; y: number }
  crossings: number
}

const MARGIN = 4 // clearance around cards
const LABEL_H = 24

const hits = (x1: number, y1: number, x2: number, y2: number, r: Rect, m = MARGIN) =>
  Math.max(x1, x2) > r.x - m && Math.min(x1, x2) < r.x + r.w + m && Math.max(y1, y2) > r.y - m && Math.min(y1, y2) < r.y + r.h + m

const rectHit = (cx: number, cy: number, w: number, h: number, r: Rect, m = 6) =>
  Math.abs(cx - (r.x + r.w / 2)) < (w + r.w) / 2 + m && Math.abs(cy - (r.y + r.h / 2)) < (h + r.h) / 2 + m

/**
 * Picks the sides a smoothstep edge leaves and enters from, and the corridor its middle segment runs in,
 * so the line (and its label) avoids the cards in between whenever a free corridor exists.
 */
export function planRoute(src: Rect, tgt: Rect, others: Rect[], labelWidth = 0): Route {
  const obstacles = others.filter((r) => r.id !== src.id && r.id !== tgt.id)
  const labelObstacles = others
  const scx = src.x + src.w / 2, scy = src.y + src.h / 2, tcx = tgt.x + tgt.w / 2, tcy = tgt.y + tgt.h / 2
  const best: { cost: number; route: Route }[] = []

  // Vertical mode: leave through top/bottom, run the middle segment horizontally at centerY.
  {
    const down = tcy >= scy
    const sx = scx, sy = down ? src.y + src.h : src.y, tx = tcx, ty = down ? tgt.y : tgt.y + tgt.h
    const lo = Math.min(sy, ty), hi = Math.max(sy, ty)
    const cands = new Set<number>([(sy + ty) / 2])
    for (const r of others) for (const y of [r.y - 40, r.y + r.h + 40]) if (y > lo + 8 && y < hi - 8) cands.add(y)
    for (const cy of cands) {
      const segs: [number, number, number, number][] = [[sx, sy, sx, cy], [sx, cy, tx, cy], [tx, cy, tx, ty]]
      const crossings = obstacles.filter((r) => segs.some(([a, b, c, d]) => hits(a, b, c, d, r))).length
      const lx = (sx + tx) / 2
      const labelHit = labelWidth > 0 && labelObstacles.some((r) => rectHit(lx, cy, labelWidth, LABEL_H, r)) ? 1 : 0
      const cost = crossings * 100 + labelHit * 500 + Math.abs(cy - (sy + ty) / 2) * 0.02 + (Math.abs(tcy - scy) >= Math.abs(tcx - scx) * 0.5 ? 0 : 3)
      best.push({ cost, route: { sx, sy, tx, ty, sourcePosition: down ? 'bottom' : 'top', targetPosition: down ? 'top' : 'bottom', centerY: cy, label: { x: lx, y: cy }, crossings } })
    }
  }
  // Horizontal mode: leave through left/right, run the middle segment vertically at centerX.
  {
    const right = tcx >= scx
    const sx = right ? src.x + src.w : src.x, sy = scy, tx = right ? tgt.x : tgt.x + tgt.w, ty = tcy
    const lo = Math.min(sx, tx), hi = Math.max(sx, tx)
    const cands = new Set<number>([(sx + tx) / 2])
    for (const r of others) for (const x of [r.x - 40, r.x + r.w + 40]) if (x > lo + 8 && x < hi - 8) cands.add(x)
    for (const cx of cands) {
      const segs: [number, number, number, number][] = [[sx, sy, cx, sy], [cx, sy, cx, ty], [cx, ty, tx, ty]]
      const crossings = obstacles.filter((r) => segs.some(([a, b, c, d]) => hits(a, b, c, d, r))).length
      const ly = (sy + ty) / 2
      const labelHit = labelWidth > 0 && labelObstacles.some((r) => rectHit(cx, ly, labelWidth, LABEL_H, r)) ? 1 : 0
      const cost = crossings * 100 + labelHit * 500 + Math.abs(cx - (sx + tx) / 2) * 0.02 + (Math.abs(tcx - scx) > Math.abs(tcy - scy) * 2 ? 0 : 3)
      best.push({ cost, route: { sx, sy, tx, ty, sourcePosition: right ? 'right' : 'left', targetPosition: right ? 'left' : 'right', centerX: cx, label: { x: cx, y: ly }, crossings } })
    }
  }
  // U-shaped detour for cards stacked in the same column: leave and re-enter through the same side.
  if (Math.abs(tcx - scx) < 60) {
    const d = Math.max(36, labelWidth / 2 + 12) // keep a label on the detour clear of both cards
    for (const dir of [1, -1] as const) {
      const sx = dir > 0 ? src.x + src.w : src.x, tx = dir > 0 ? tgt.x + tgt.w : tgt.x, sy = scy, ty = tcy
      const segs: [number, number, number, number][] = [[sx, sy, sx + dir * d, sy], [sx + dir * d, sy, sx + dir * d, ty], [sx + dir * d, ty, tx, ty]]
      const crossings = obstacles.filter((r) => segs.some(([a, b, c, e]) => hits(a, b, c, e, r))).length
      const lx = sx + dir * d, ly = (sy + ty) / 2
      const labelHit = labelWidth > 0 && labelObstacles.some((r) => rectHit(lx, ly, labelWidth, LABEL_H, r)) ? 1 : 0
      const side: Side = dir > 0 ? 'right' : 'left'
      best.push({ cost: crossings * 100 + labelHit * 500 + 5, route: { sx, sy, tx, ty, sourcePosition: side, targetPosition: side, offset: d, label: { x: lx, y: ly }, crossings } })
    }
  }
  return best.reduce((a, b) => (b.cost < a.cost ? b : a)).route
}

export const labelWidthFor = (text: string) => text.length * 6.4 + 22
