import { Store } from '@tanstack/react-store'
import { LucideFileJson } from 'lucide-react'

import contacts from '../assets/contacts.json?raw'
import me from '../assets/me.json?raw'

type File = {
  content: string
  language: 'json'
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
          isOpen: true,
          content: me,
          language: 'json'
        },
        {
          icon: LucideFileJson,
          name: 'contacts.json',
          isCurrent: false,
          isOpen: false,
          content: contacts,
          language: 'json'
        }
      ],
      name: 'About',
      isOpen: true
    }
  ]
})
