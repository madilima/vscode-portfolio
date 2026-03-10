import { useStore } from '@tanstack/react-store'
import { LucideMoreHorizontal } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { appStore } from '../lib/app-store'
import { closeFile } from '../utils/close-file'
import { File } from './file'
import { Folder } from './folder'
import { Section } from './section'

export function Explorer() {
  const { t } = useTranslation()

  const [isOpenEditorsOpen, setIsOpenEditorsOpen] = useState(true)
  const [isProjectOpen, setIsProjectOpen] = useState(true)

  const currentFile = useStore(appStore, store => {
    return store.folders
      .flatMap(folder => folder.files)
      .find(file => file.isCurrent)
  })

  const openFiles = useStore(appStore, store => {
    return store.folders
      .flatMap(folder => folder.files)
      .filter(file => file.isOpen)
  })

  const folders = useStore(appStore, store => store.folders)

  const isExplorerCollapsed = useStore(
    appStore,
    store => store.isExplorerCollapsed
  )

  function getFolderLabel(folderName: string) {
    if (folderName === 'About') {
      return t('explorer.folders.about')
    }

    if (folderName === 'Projects') {
      return t('explorer.folders.projects')
    }

    return folderName
  }

  if (isExplorerCollapsed) {
    return null
  }

  return (
    <div className="w-64 border-zinc-700 border-r px-2 py-2 text-[#8F8CA8]">
      <strong className="flex items-center justify-between pl-2 font-medium text-xs">
        {t('explorer.title').toUpperCase()}
        <LucideMoreHorizontal size={16} className="mr-2" />
      </strong>
      <nav className="mt-4 flex flex-col">
        <Section
          isOpen={isOpenEditorsOpen}
          onOpenChange={setIsOpenEditorsOpen}
          title={t('explorer.openEditors')}
        >
          {openFiles.map(file => (
            <File
              icon={file.icon}
              closeable
              onClose={() => closeFile(file.name)}
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
        </Section>

        <Section
          isOpen={isProjectOpen}
          onOpenChange={setIsProjectOpen}
          title="madilima"
        >
          {folders.map(folder => (
            <Folder
              key={folder.name}
              isOpen={folder.isOpen}
              name={getFolderLabel(folder.name)}
              onOpenChange={isOpen => {
                appStore.setState(prev => ({
                  ...prev,
                  folders: prev.folders.map(f => {
                    if (folder.name === f.name) {
                      return {
                        ...f,
                        isOpen
                      }
                    }

                    return f
                  })
                }))
              }}
            >
              {folder.files.map(file => (
                <File
                  icon={file.icon}
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
