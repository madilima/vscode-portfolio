import type { Airplay } from 'lucide-react'

type IconType = typeof Airplay

type SidebarItem = {
  id: string
  icon: IconType
  isSelected: boolean
}

interface SidebarProps {
  items: Array<SidebarItem>
  footerItems: Array<SidebarItem>
}

export function Sidebar(props: SidebarProps) {
  const { items, footerItems } = props

  return (
    <div className="flex w-14 flex-1 grow flex-col justify-between border-zinc-700 border-r">
      <div className="flex flex-col">
        {items.map(item => {
          const Icon = item.icon
          return (
            <div
              key={item.id}
              data-active={item.isSelected}
              className="flex h-12 items-center justify-center border-transparent border-l-2 data-[active=true]:border-[#E0DEF2]"
            >
              <Icon color={item.isSelected ? '#E0DEF2' : '#8F8CA8'} size={28} />
            </div>
          )
        })}
      </div>
      <div className="flex flex-col">
        {footerItems.map(item => {
          const Icon = item.icon
          return (
            <div
              key={item.id}
              data-active={item.isSelected}
              className="flex h-12 items-center justify-center border-transparent border-l-2 data-[active=true]:border-[#E0DEF2]"
            >
              <Icon color={item.isSelected ? '#E0DEF2' : '#8F8CA8'} size={28} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
