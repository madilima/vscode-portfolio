import { LucideMoreHorizontal } from 'lucide-react'
import { useState } from 'react'

import { File } from './file'
import { Folder } from './folder'
import { Section } from './section'

export function Explorer() {
  const [isOpenEditorsOpen, setIsOpenEditorsOpen] = useState(true)
  const [isProjectOpen, setIsProjectOpen] = useState(true)
  const [isAboutOpen, setIsAboutOpen] = useState(true)

  const [currentFile, setCurrentFile] = useState("me.json")

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
          title="Open editors"
        ></Section>
        <Section
          isOpen={isProjectOpen}
          onOpenChange={setIsProjectOpen}
          title="madilima"
        >
          <Folder
            isOpen={isAboutOpen}
            name="About"
            onOpenChange={setIsAboutOpen}
          >
            <File name='me.json' isActive={currentFile === "me.json"} onClick={() => setCurrentFile("me.json")} />
               <File name='gustavinho.json' isActive={currentFile === "gustavinho.json"} onClick={() => setCurrentFile("gustavinho.json")} />
          </Folder>
        </Section>
      </nav>
    </div>
  )
}
