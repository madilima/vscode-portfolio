import {
  LucideChevronDown,
  LucideChevronRight,
  LucideFolder
} from 'lucide-react'
import { Activity, type ReactNode } from 'react'

interface FolderProps {
  children?: ReactNode
  name: string
  isOpen: boolean
  onOpenChange: (isOpen: boolean) => void
}

export function Folder(props: FolderProps) {
  const { children, name, isOpen, onOpenChange } = props

  return (
    <div>
      <button
        onClick={() => onOpenChange(!isOpen)}
        className="flex w-full items-center gap-2 border border-transparent px-2 py-1 hover:bg-[#2a273f] hover:text-[#E0DEF2] focus:border-[#363247] focus:bg-[#2a273f] focus:text-[#E0DEF2]"
      >
        {isOpen ? (
          <LucideChevronDown size={20} />
        ) : (
          <LucideChevronRight size={20} />
        )}
        <LucideFolder size={16} />
        <span className="text-sm">{name}</span>
      </button>
      <Activity mode={isOpen ? 'visible' : 'hidden'}>
        <div className="pl-2">{children}</div>
      </Activity>
    </div>
  )
}
