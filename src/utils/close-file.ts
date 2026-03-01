import { appStore } from '../lib/app-store'

export function closeFile(name: string) {
  appStore.setState(prev => ({
    ...prev,
    folders: prev.folders.map(folder => ({
      ...folder,
      files: folder.files.map(f => {
        if (f.name === name) {
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

  const openFiles = appStore
    .get()
    .folders.flatMap(folder => folder.files)
    .filter(file => file.isOpen)

  const hasCurrentFile = openFiles.find(file => file.isCurrent)

  if (openFiles.length && !hasCurrentFile) {
    const firstFile = openFiles.at(0)

    appStore.setState(prev => ({
      ...prev,
      folders: prev.folders.map(folder => ({
        ...folder,
        files: folder.files.map(f => {
          if (f.name === firstFile?.name) {
            return { ...f, isCurrent: true }
          }
          return f
        })
      }))
    }))
  }
}
