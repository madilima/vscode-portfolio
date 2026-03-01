import { useStore } from '@tanstack/react-store'

import { appStore } from '../lib/app-store'
import { Tab } from './tab'

export function Tabs() {
  const openFiles = useStore(appStore, store => {
    return store.folders
      .flatMap(folder => folder.files)
      .filter(file => file.isOpen)
  })

  return (
    <div className="flex h-9 flex-row text-sm">
      {openFiles.map(file => {
        return (
          <Tab
            onClose={() => {
              appStore.setState(prev => ({
                ...prev,
                folders: prev.folders.map(folder => ({
                  ...folder,
                  files: folder.files.map(f => {
                    if (f.name === file.name) {
                      return {
                        ...f,
                        isCurrent: false,
                        isOpen: false
                      }
                    }
                    return f
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
