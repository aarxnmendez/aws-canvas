import { useCallback, useMemo, useState } from 'react'
import {
  Background, BackgroundVariant, MarkerType, ReactFlow, ReactFlowProvider, useReactFlow,
  type Edge, type NodeMouseHandler, type NodeTypes, type EdgeTypes,
} from '@xyflow/react'
import { CATEGORY, LINKS, NODES, POSITIONS, RELATIONS, type ConceptNode } from './data'
import ConceptCard, { type FlowNode } from './components/ConceptNode'
import FloatingEdge from './components/FloatingEdge'
import Sidebar from './components/Sidebar'

const nodeTypes: NodeTypes = { concept: ConceptCard }
const edgeTypes: EdgeTypes = { floating: FloatingEdge }
const BY_ID = new Map(NODES.map((n) => [n.id, n]))
const colorOf = (id: string) => CATEGORY[BY_ID.get(id)!.category].color

function matches(n: ConceptNode, q: string) {
  return [n.label, n.badge, ...n.keywords, ...n.triggers].some((s) => s.toLowerCase().includes(q))
}

function Canvas() {
  const { zoomIn, zoomOut, fitView, setCenter } = useReactFlow()
  const [selected, setSelected] = useState<string | null>(null)
  const [hovered, setHovered] = useState<string | null>(null)
  const [query, setQuery] = useState('')
  const q = query.trim().toLowerCase()

  const hits = useMemo(() => (q ? new Set(NODES.filter((n) => matches(n, q)).map((n) => n.id)) : null), [q])

  const nodes: FlowNode[] = useMemo(
    () => NODES.map((c) => ({
      id: c.id, type: 'concept', position: POSITIONS[c.id], draggable: true, zIndex: 10, // above all edges
      origin: [0.5, 0.5],
      data: { concept: c, active: c.id === selected, dim: hits ? !hits.has(c.id) : false },
    })),
    [selected, hits],
  )

  // Edges stay neutral; only those touching the hovered or selected node light up in its category color.
  // Dashed cross-module edges stay hidden until one of their nodes is hovered or selected.
  const edges: Edge[] = useMemo(
    () => LINKS.map((l, i) => {
      const focusIds = [hovered, selected].filter(Boolean) as string[]
      const focusId = focusIds.find((id) => l.source === id || l.target === id)
      const active = !!focusId
      const hidden = !!l.dashed && !active
      const color = active ? colorOf(focusId!) : '#334155'
      const faded = hits ? !(hits.has(l.source) && hits.has(l.target)) : false
      return {
        id: `e${i}`, source: l.source, target: l.target, type: 'floating', label: l.label,
        data: { faded, active, hidden },
        style: { stroke: color, opacity: hidden ? 0 : faded ? 0.08 : active ? 1 : l.emphasis ? 0.55 : 0.3, strokeWidth: active ? 2.2 : l.emphasis ? 1.8 : 1, ...(l.dashed ? { strokeDasharray: '2 6', strokeLinecap: 'round' as const } : {}) },
        markerEnd: { type: MarkerType.ArrowClosed, color, width: active ? 16 : 10, height: active ? 16 : 10 },
      }
    }),
    [selected, hovered, hits],
  )

  const focus = useCallback((id: string) => {
    const p = POSITIONS[id]
    setSelected(id)
    setCenter(p.x + 190 / 1.1, p.y, { zoom: 1.1, duration: 700 })
  }, [setCenter])

  const onNodeClick: NodeMouseHandler = useCallback((_, n) => { if (n.type === 'concept') focus(n.id) }, [focus])

  const onSearch = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && hits?.size) focus([...hits][0])
    if (e.key === 'Escape') setQuery('')
  }

  const related = useMemo(() => {
    if (!selected) return []
    return RELATIONS.flatMap((l) =>
      l.source === selected ? [{ node: BY_ID.get(l.target)!, relation: l.label ?? 'includes' }]
      : l.target === selected ? [{ node: BY_ID.get(l.source)!, relation: l.label ? `${l.label} (from)` : 'part of' }]
      : [])
  }, [selected])

  const btn = 'grid size-10 place-items-center text-zinc-300 transition hover:bg-zinc-800 hover:text-white'

  return (
    <div className="relative h-[100dvh] w-full touch-none overflow-hidden">
      <ReactFlow
        nodes={nodes} edges={edges} nodeTypes={nodeTypes} edgeTypes={edgeTypes}
        onNodeClick={onNodeClick} onNodeMouseEnter={(_, n) => setHovered(n.id)} onNodeMouseLeave={() => setHovered(null)} onPaneClick={() => setSelected(null)}
        fitView fitViewOptions={{ padding: 0.15 }} minZoom={0.03} maxZoom={2}
        nodesConnectable={false} elementsSelectable={false} onlyRenderVisibleElements
        panOnDrag panOnScroll={false} zoomOnPinch zoomOnDoubleClick preventScrolling // one-finger pan, pinch zoom, double-tap zoom
        proOptions={{ hideAttribution: true }}
      >
        <Background variant={BackgroundVariant.Dots} gap={28} size={1.2} color="#27303d" />
      </ReactFlow>

      {/* Title */}
      <div className="pointer-events-none absolute left-4 top-4 z-10 hidden sm:block">
        <div className="text-lg font-bold tracking-tight text-zinc-50"><span className="text-[#FF9900]">aws</span>-canvas</div>
        <div className="text-xs text-zinc-500">AWS Certified Cloud Practitioner · Modules 1–8</div>
      </div>

      {/* Search */}
      <div className="absolute left-1/2 top-4 z-10 w-[min(420px,calc(100%-2rem))] -translate-x-1/2 sm:left-[44%]">
        <div className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-950/90 px-3 shadow-xl backdrop-blur focus-within:border-zinc-600">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#71717a" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><path d="M20 20l-3.5-3.5" /></svg>
          <input value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={onSearch}
            placeholder="Search services or exam keywords…" aria-label="Search nodes"
            className="h-10 flex-1 bg-transparent text-sm text-zinc-100 outline-none placeholder:text-zinc-500" />
          {hits && <span className="text-xs text-zinc-500">{hits.size} found</span>}
        </div>
      </div>

      {/* Zoom controls */}
      <div className="absolute bottom-4 left-4 z-10 flex flex-col overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950/90 shadow-xl backdrop-blur">
        <button className={btn} onClick={() => zoomIn({ duration: 200 })} aria-label="Zoom in">+</button>
        <button className={btn + ' border-y border-zinc-800'} onClick={() => zoomOut({ duration: 200 })} aria-label="Zoom out">−</button>
        <button className={btn} onClick={() => { setSelected(null); setQuery(''); fitView({ padding: 0.15, duration: 600 }) }} aria-label="Reset view" title="Reset">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" /></svg>
        </button>
      </div>

      {/* Legend */}
      <div className="absolute bottom-4 left-20 z-10 hidden gap-3 rounded-xl border border-zinc-800 bg-zinc-950/90 px-3 py-2 text-xs text-zinc-400 backdrop-blur md:flex">
        {(['compute', 'global', 'storage', 'security', 'database', 'databases', 'networking', 'ai'] as const).map((k) => (
          <span key={k} className="flex items-center gap-1.5"><i className="size-2 rounded-full" style={{ background: CATEGORY[k].color }} />{CATEGORY[k].label}</span>
        ))}
      </div>

      <Sidebar node={selected ? BY_ID.get(selected)! : null} related={related} onClose={() => setSelected(null)} onSelect={focus} />
    </div>
  )
}

export default function App() {
  return (
    <ReactFlowProvider>
      <Canvas />
    </ReactFlowProvider>
  )
}
