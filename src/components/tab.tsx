import { type LucideFileJson, X } from 'lucide-react'

interface TabProps {
  name: string
  isActive: boolean
  icon: typeof LucideFileJson
  onClose: () => void
  onClick: () => void
}

export function Tab(props: TabProps) {
  const { isActive, name, onClose, icon: Icon, onClick } = props

  return (
    <button
      onClick={onClick}
      data-active={isActive}
      className="flex h-full items-center gap-[6px] px-[10px] hover:bg-[#817c9c26] hover:text-[#908caa] data-[active=true]:bg-[#817c9c14] data-[active=true]:text-white"
    >
      <Icon size={16} color={isActive ? '#e0def4' : '#908caa'} />
      <span
        data-active={isActive}
        className="text-[#908caa] data-[active=true]:text-[#e0def4]"
      >
        {name}
      </span>
      <button
        onClick={event => {
          event.stopPropagation()

          onClose()
        }}
        className="flex h-[20px] w-[20px] items-center justify-center rounded hover:bg-[#817c9c26]"
      >
        <X size={16} color={isActive ? '#e0def4' : '#908caa'} />
      </button>
    </button>
  )
}
