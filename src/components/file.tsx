import { LucideFileJson } from 'lucide-react'

interface FileProps {
  name: string
  isActive: boolean
  onClick: () => void
}

export function File(props: FileProps) {
  const { name, isActive, onClick } = props

  return (
    <div>
      <button
        onClick={onClick}
        data-active={isActive}
        className="flex w-full items-center gap-2 px-4 py-1 pl-10 text-sm hover:bg-[#2a273f] hover:text-[#E0DEF2] data-[active=true]:bg-[#2a273f] data-[active=true]:text-[#E0DEF2]"
      >
        <LucideFileJson size={16} />
        <span className="text-sm">{name}</span>
      </button>
    </div>
  )
}
