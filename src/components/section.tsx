import { LucideChevronDown, LucideChevronRight } from 'lucide-react'
import type { ReactNode } from 'react'
import { Activity } from 'react'

interface SectionProps {
  title: string
  isOpen: boolean
  children?: ReactNode
  onOpenChange: (isOpen: boolean) => void
}

export function Section(props: SectionProps) {
  const { title, isOpen, children, onOpenChange } = props

  return (
    <div className="">
      <button
        onClick={() => onOpenChange(!isOpen)}
        type="button"
        className="flex w-full items-center gap-2 border border-transparent border-t-[#817c9c26] px-1 py-1 focus:border-[#363247]"
      >
        {isOpen ? (
          <LucideChevronDown size={20} />
        ) : (
          <LucideChevronRight size={20} />
        )}
        <span className="font-semibold text-xs">{title.toUpperCase()}</span>
      </button>

      <Activity mode={isOpen ? 'visible' : 'hidden'}>
        <div>{children}</div>
      </Activity>
    </div>
  )
}
