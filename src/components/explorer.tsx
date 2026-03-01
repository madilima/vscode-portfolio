import { LucideMoreHorizontal } from 'lucide-react'
import { useState } from 'react'

import { Section } from './section'

export function Explorer() {
  const [isOpenEditorsOpen, setIsOpenEditorsOpen] = useState(true)
  const [isProjectOpen, setIsProjectOpen] = useState(true)

  return (
    <div className="w-64 px-4 py-2 text-[#8F8CA8]">
      <strong className="flex items-center justify-between pl-2 font-medium text-xs">
        EXPLORER
        <LucideMoreHorizontal size={16} />
      </strong>
      <nav className="mt-4 flex flex-col">
        <Section
          isOpen={isOpenEditorsOpen}
          onOpenChange={setIsOpenEditorsOpen}
          title="batatinha"
        >
          
        </Section>
        <Section
          isOpen={isProjectOpen}
          onOpenChange={setIsProjectOpen}
          title="gustavinho"
        />
      </nav>
    </div>
  )
}
