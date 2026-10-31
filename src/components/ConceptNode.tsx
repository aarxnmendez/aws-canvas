import { memo } from 'react'
import { Handle, Position, type Node, type NodeProps } from '@xyflow/react'
import { CATEGORY, type ConceptNode as C } from '../data'
import { Icon } from './Icon'

export type NodeData = { concept: C; dim: boolean; active: boolean } & Record<string, unknown>
export type FlowNode = Node<NodeData, 'concept'>

function ConceptCard({ data }: NodeProps<FlowNode>) {
  const { concept: c, dim, active } = data
  const color = CATEGORY[c.category].color
  const core = c.id.includes('root')
  return (
    <div
      className={`relative flex items-center gap-3.5 rounded-2xl border bg-slate-900 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--glow)] hover:shadow-[0_0_34px_2px_var(--glow)] ${active ? 'border-[var(--glow)] shadow-[0_0_44px_4px_var(--glow)]' : (c.id === 'root-clf-c02' ? 'border-[#FF9900]/40' : 'border-slate-800')} ${core ? 'w-[300px] px-5 py-5' : 'w-[240px] px-3.5 py-3.5'}`}
      style={{ '--glow': `${color}b3`, opacity: dim ? 0.18 : 1 } as React.CSSProperties}
    >
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
      <div className="shrink-0"><Icon name={c.icon} size={core ? 64 : 52} /></div>
      <div className="min-w-0">
        <div className="text-[10px] font-medium uppercase tracking-wider text-slate-400">{c.badge}</div>
        <div className={`font-semibold leading-tight text-slate-50 ${core ? 'text-lg' : 'text-sm'}`}>{c.label}</div>
      </div>
    </div>
  )
}

export default memo(ConceptCard)
