import { useStore } from '@tanstack/react-store'

import { appStore } from '../lib/app-store'
import { closeFile } from '../utils/close-file'
import { Tab } from './tab'

export function Tabs() {
  const openFiles = useStore(appStore, store => {
    return store.folders
      .flatMap(folder => folder.files)
      .filter(file => file.isOpen)
  })

  if (openFiles.length === 0) {
    return null
  }

  return (
    <div className="flex h-9 flex-row text-sm">
      {openFiles.map(file => {
        return (
          <Tab
            onClose={() => closeFile(file.name)}
            onClick={() => {
              appStore.setState(prev => ({
                ...prev,
                folders: prev.folders.map(folder => ({
                  ...folder,
                  files: folder.files.map(f => {
                    if (f.name === file.name) {
                      return {
                        ...f,
                        isCurrent: true
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
            icon={file.icon}
            isActive={file.isCurrent}
            name={file.name}
            key={file.name}
          />
        )
      })}
    </div>
  )
}
