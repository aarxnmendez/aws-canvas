import { memo, useMemo, useState } from 'react'
import { BaseEdge, EdgeLabelRenderer, getSmoothStepPath, useStore, type EdgeProps, type Position, type ReactFlowState } from '@xyflow/react'
import { labelWidthFor, planRoute, type Rect } from '../lib/routing'

// Smoothstep edge whose sides and middle corridor are chosen per edge so it flows around the cards
// instead of through them. Cards sit above edges (z-index), and labels are HTML pills with a dark background.
const rectsSelector = (s: ReactFlowState) => s.nodeLookup

function FloatingEdge({ id, source, target, markerEnd, style, label, data }: EdgeProps) {
  const lookup = useStore(rectsSelector)
  const [hovered, setHovered] = useState(false)
  const { faded, active } = (data ?? {}) as { faded?: boolean; active?: boolean }

  const route = useMemo(() => {
    const rects: Rect[] = []
    lookup.forEach((n) => {
      const w = n.measured.width ?? n.width ?? 0, h = n.measured.height ?? n.height ?? 0
      if (w && h) rects.push({ id: n.id, x: n.internals.positionAbsolute.x, y: n.internals.positionAbsolute.y, w, h })
    })
    const src = rects.find((r) => r.id === source), tgt = rects.find((r) => r.id === target)
    if (!src || !tgt) return null
    return planRoute(src, tgt, rects, typeof label === 'string' ? labelWidthFor(label) : 0)
  }, [lookup, source, target, label])

  if (!route) return null
  const [path] = getSmoothStepPath({
    sourceX: route.sx, sourceY: route.sy, sourcePosition: route.sourcePosition as Position,
    targetX: route.tx, targetY: route.ty, targetPosition: route.targetPosition as Position,
    borderRadius: 18, centerX: route.centerX, centerY: route.centerY, offset: route.offset,
  })

  return (
    <>
      <BaseEdge id={id} path={path} markerEnd={markerEnd} style={style} className={active || hovered ? 'flow-edge' : undefined} />
      {/* Wide invisible stroke so the edge itself is hoverable even though selection is disabled. */}
      <path d={path} fill="none" stroke="transparent" strokeWidth={16} style={{ pointerEvents: 'stroke' }}
        onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} />
      {typeof label === 'string' && !faded && (
        <EdgeLabelRenderer>
          <div
            className={`pointer-events-none absolute rounded border border-slate-800 bg-slate-900/90 px-2 py-0.5 text-[10px] font-medium text-slate-300 shadow-md backdrop-blur-sm transition-opacity duration-200 ${active || hovered ? 'opacity-100' : 'opacity-0'}`}
            style={{ transform: `translate(-50%, -50%) translate(${route.label.x}px, ${route.label.y}px)`, zIndex: 5 }}
          >
            {label}
          </div>
        </EdgeLabelRenderer>
      )}
    </>
  )
}

export default memo(FloatingEdge)
