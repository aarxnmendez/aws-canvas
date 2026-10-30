import type { IconName } from '../data'

// Official AWS icons (Asset Package 07/31/2025), unmodified and in their native colors.
const URLS = import.meta.glob<string>('../assets/icons/*.svg', { eager: true, query: '?url', import: 'default' })

export function Icon({ name, size = 22 }: { name: IconName; size?: number }) {
  return <img src={URLS[`../assets/icons/${name}.svg`]} width={size} height={size} alt="" draggable={false} className="block rounded-md" />
}
