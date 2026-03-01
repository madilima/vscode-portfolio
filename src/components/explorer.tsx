import { useStore } from '@tanstack/react-store'
import { LucideMoreHorizontal } from 'lucide-react'
import { useState } from 'react'

import { appStore } from '../lib/app-store'
import { File } from './file'
import { Folder } from './folder'
import { Section } from './section'

export function Explorer() {
  const [isOpenEditorsOpen, setIsOpenEditorsOpen] = useState(true)
  const [isProjectOpen, setIsProjectOpen] = useState(true)

  const currentFile = useStore(appStore, store => {
    return store.folders
      .flatMap(folder => folder.files)
      .find(file => file.isCurrent)
  })

  const folders = useStore(appStore, store => store.folders)

  return (
    <div className="w-64 border-zinc-700 border-r px-4 py-2 text-[#8F8CA8]">
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
          {folders.map(folder => (
            <Folder
              key={folder.name}
              isOpen={folder.isOpen}
              name={folder.name}
              onOpenChange={isOpen => {
                appStore.setState(prev => ({
                  ...prev,
                  folders: prev.folders.map(f => ({
                    ...f,
                    isOpen
                  }))
                }))
              }}
            >
              {folder.files.map(file => (
                <File
                  key={file.name}
                  name={file.name}
                  isActive={currentFile?.name === file.name}
                  onClick={() => {
                    appStore.setState(prev => ({
                      ...prev,
                      folders: prev.folders.map(folder => ({
                        ...folder,
                        files: folder.files.map(f => {
                          if (f.name === file.name) {
                            return {
                              ...f,
                              isCurrent: true,
                              isOpen: true
                            }
                          }
                          return {
                            ...f,
                            isCurrent: false
                          }
                        })
                      }))
                    }))
                  }}
                />
              ))}
            </Folder>
          ))}
        </Section>
      </nav>
    </div>
  )
}
