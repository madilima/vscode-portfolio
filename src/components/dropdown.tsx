import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import classNames from 'classnames'
import type { Airplay } from 'lucide-react'
import type { ReactNode } from 'react'

interface DropdownProps {
  trigger: ReactNode
  children: ReactNode
}

export function Dropdown(props: DropdownProps) {
  const { children, trigger } = props

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>{trigger}</DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          sideOffset={2}
          side="right"
          className={classNames(
            'z-10 flex min-w-45 flex-col rounded-md border border-zinc-700 bg-slate-4',
            'p-1 text-white shadow'
          )}
          collisionPadding={{
            left: 16,
            right: 16
          }}
        >
          {children}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

interface DropdownItemProps {
  label: string
  icon: typeof Airplay
  onClick: () => void
}

export function DropdownItem(props: DropdownItemProps) {
  const { label, icon: Icon, onClick } = props

  return (
    <DropdownMenu.Item
      onClick={onClick}
      className={classNames(
        'flex cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-1',
        'text-slate-11 text-sm hover:bg-slate-6 hover:outline-0'
      )}
    >
      <Icon size={16} />
      {label}
    </DropdownMenu.Item>
  )
}
