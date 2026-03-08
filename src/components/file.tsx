import classNames from 'classnames'
import { type FileCodeCorner, X } from 'lucide-react'

interface FileProps {
  name: string
  isActive: boolean
  onClick: () => void
  closeable?: boolean
  onClose?: () => void
  icon: typeof FileCodeCorner
}

export function File(props: FileProps) {
  const { name, isActive, onClick, closeable, onClose, icon: Icon } = props

  return (
    <div>
      <button
        onClick={onClick}
        data-active={isActive}
        className={classNames(
          'flex w-full items-center gap-2 px-4 py-1 text-sm hover:bg-slate-5',
          'hover:text-[#E0DEF2] data-[active=true]:bg-slate-5 data-[active=true]:text-[#E0DEF2]',
          {
            'pl-10': !closeable
          }
        )}
      >
        {closeable && (
          <button
            onClick={event => {
              event.stopPropagation()

              onClose?.()
            }}
            className="flex h-[20px] w-[20px] items-center justify-center rounded hover:bg-[#817c9c26]"
          >
            <X size={16} color={isActive ? '#e0def4' : '#908caa'} />
          </button>
        )}

        <Icon size={16} />
        <span className="text-sm">{name}</span>
      </button>
    </div>
  )
}
