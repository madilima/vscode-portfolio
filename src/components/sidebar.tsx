import classNames from 'classnames'
import type { Airplay } from 'lucide-react'

import { Dropdown, DropdownItem } from './dropdown'

type IconType = typeof Airplay

type SidebarItem = {
  id: string
  icon: IconType
  isSelected: boolean
  items?: {
    label: string
    icon: IconType
    onClick: () => void
  }[]
}

interface SidebarProps {
  items: Array<SidebarItem>
  footerItems: Array<SidebarItem>
}

export function Sidebar(props: SidebarProps) {
  const { items, footerItems } = props

  function renderItem(item: SidebarItem) {
    const Icon = item.icon
    return (
      <div
        key={item.id}
        data-active={item.isSelected}
        className={classNames(
          'flex h-12 items-center justify-center border-transparent border-l-2 data-[active=true]:border-[#E0DEF2]',
          {
            'cursor-pointer': !!item.items
          }
        )}
      >
        <Icon
          data-selected={item.isSelected}
          className={classNames(
            'text-[#8F8CA8] data-[selected=true]:text-[#E0DEF2]',
            {
              'hover:text-zinc-300': !!item.items
            }
          )}
          size={28}
        />
      </div>
    )
  }

  return (
    <div className="flex min-w-14 max-w-14 flex-1 grow flex-col justify-between border-zinc-700 border-r">
      <div className="flex flex-col">
        {items.map(item => {
          if (item.items) {
            return (
              <Dropdown trigger={renderItem(item)}>
                {item.items.map(i => (
                  <DropdownItem
                    onClick={i.onClick}
                    key={i.label}
                    label={i.label}
                    icon={i.icon}
                  />
                ))}
              </Dropdown>
            )
          }

          return renderItem(item)
        })}
      </div>

      <div className="flex flex-col">
        {footerItems.map(item => {
          if (item.items) {
            return (
              <Dropdown trigger={renderItem(item)}>
                {item.items.map(i => (
                  <DropdownItem
                    onClick={i.onClick}
                    key={i.label}
                    label={i.label}
                    icon={i.icon}
                  />
                ))}
              </Dropdown>
            )
          }

          return renderItem(item)
        })}
      </div>
    </div>
  )
}
