import { memo } from 'react'
import { BaseEdge, getBezierPath, Position, useInternalNode, type EdgeProps, type InternalNode } from '@xyflow/react'

function center(n: InternalNode) {
  const w = n.measured.width ?? 0, h = n.measured.height ?? 0
  return { x: n.internals.positionAbsolute.x + w / 2, y: n.internals.positionAbsolute.y + h / 2, w, h }
}

// Point where the line from this node's center toward `to` leaves its rectangle.
function border(n: InternalNode, to: { x: number; y: number }) {
  const c = center(n)
  const dx = to.x - c.x, dy = to.y - c.y
  const sx = dx === 0 ? Infinity : c.w / 2 / Math.abs(dx)
  const sy = dy === 0 ? Infinity : c.h / 2 / Math.abs(dy)
  const t = Math.min(sx, sy)
  const horizontal = sx < sy
  const pos = horizontal ? (dx > 0 ? Position.Right : Position.Left) : dy > 0 ? Position.Bottom : Position.Top
  return { x: c.x + dx * t, y: c.y + dy * t, pos }
}

function FloatingEdge({ id, source, target, markerEnd, style, label, data }: EdgeProps) {
  const s = useInternalNode(source), t = useInternalNode(target)
  if (!s || !t || !s.measured.width || !t.measured.width) return null
  const a = border(s, center(t)), b = border(t, center(s))
  const [path, lx, ly] = getBezierPath({
    sourceX: a.x, sourceY: a.y, sourcePosition: a.pos, targetX: b.x, targetY: b.y, targetPosition: b.pos, curvature: 0.35,
  })
  const { faded, active } = (data ?? {}) as { faded?: boolean; active?: boolean }
  return (
    <>
      <BaseEdge id={id} path={path} markerEnd={markerEnd} style={style} className={active ? 'flow-edge' : undefined}
        label={faded ? undefined : label} labelX={lx} labelY={ly}
        labelStyle={{ fill: active ? '#e4e4e7' : '#64748b', fontSize: 11, fontWeight: 600 }}
        labelBgStyle={{ fill: '#09090b', fillOpacity: 0.9 }} labelBgPadding={[6, 3]} labelBgBorderRadius={6} />
    </>
  )
}

export default memo(FloatingEdge)
