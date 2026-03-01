import { Store } from '@tanstack/react-store'
import { LucideFileJson } from 'lucide-react'

type File = {
  name: string
  icon: typeof LucideFileJson
  isCurrent: boolean
  isOpen: boolean
}

type Folder = {
  name: string
  files: Array<File>
  isOpen: boolean
}

type AppStore = {
  folders: Array<Folder>
}

export const appStore = new Store<AppStore>({
  folders: [
    {
      files: [
        {
          icon: LucideFileJson,
          name: 'me.json',
          isCurrent: true,
          isOpen: true
        },
        {
          icon: LucideFileJson,
          name: 'contacts.json',
          isCurrent: false,
          isOpen: false
        }
      ],
      name: 'About',
      isOpen: true
    }
  ]
})
