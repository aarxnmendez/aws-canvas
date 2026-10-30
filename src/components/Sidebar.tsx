import { CATEGORY, type ConceptNode } from '../data'
import { Icon } from './Icon'

interface Props {
  node: ConceptNode | null
  related: { node: ConceptNode; relation: string }[]
  onClose: () => void
  onSelect: (id: string) => void
}

export default function Sidebar({ node, related, onClose, onSelect }: Props) {
  if (!node) return null
  const color = CATEGORY[node.category].color
  return (
    <aside key={node.id} className="panel-in absolute inset-y-3 right-3 z-20 flex w-[min(380px,calc(100%-1.5rem))] flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/95 shadow-2xl backdrop-blur"
      style={{ boxShadow: `0 0 60px ${color}22` }} aria-label="Concept details">
      <div className="h-1" style={{ background: `linear-gradient(90deg, ${color}, transparent)` }} />
      <div className="flex items-start gap-3 p-5">
        <div className="shrink-0">
          <Icon name={node.icon} size={52} />
        </div>
        <div className="min-w-0 flex-1">
          <h2 className="text-xl font-bold leading-tight text-zinc-50">{node.label}</h2>
          <span className="mt-1.5 inline-block rounded-full border px-2.5 py-0.5 text-[11px] font-semibold" style={{ color, borderColor: `${color}66`, background: `${color}14` }}>
            ✓ {node.badge}
          </span>
        </div>
        <button onClick={onClose} aria-label="Close panel" className="rounded-lg p-1.5 text-zinc-400 hover:bg-zinc-800 hover:text-white">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
      </div>
      <div className="flex-1 space-y-6 overflow-y-auto px-5 pb-5">
        <p className="text-sm leading-relaxed text-zinc-300">{node.summary}</p>
        <section>
          <h3 className="mb-2 text-xs font-bold uppercase tracking-widest text-zinc-500">Exam Triggers</h3>
          <ul className="space-y-2">
            {node.triggers.map((t) => (
              <li key={t} className="flex gap-2.5 rounded-lg border border-zinc-800 bg-zinc-900/70 px-3 py-2 text-sm text-zinc-100">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full" style={{ background: color }} />
                {t}
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h3 className="mb-2 text-xs font-bold uppercase tracking-widest text-zinc-500">Related Connected Services</h3>
          <div className="flex flex-wrap gap-2">
            {related.map(({ node: r, relation }) => (
              <button key={r.id + relation} onClick={() => onSelect(r.id)}
                className="flex items-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-900 px-2.5 py-1.5 text-xs text-zinc-200 transition hover:border-zinc-600 hover:bg-zinc-800">
                <span className="size-2 rounded-full" style={{ background: CATEGORY[r.category].color }} />
                {r.label}
                <span className="text-zinc-500">· {relation}</span>
              </button>
            ))}
          </div>
        </section>
      </div>
    </aside>
  )
}
