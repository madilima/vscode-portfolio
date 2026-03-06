import { Store } from '@tanstack/react-store'
import { Braces, LucideFileJson } from 'lucide-react'

import contacts from '../assets/contacts.json?raw'
import education from '../assets/education.json?raw'
import me from '../assets/me.md?raw'
import projects from '../assets/projects.json?raw'

type File = {
  content: string
  language: 'json' | 'markdown'
  name: string
  icon: typeof Braces
  isCurrent: boolean
  isOpen: boolean
}

type Folder = {
  name: string
  files: Array<File>
  isOpen: boolean
}

type AppStore = {
  isExplorerCollapsed: boolean
  folders: Array<Folder>
}

export const appStore = new Store<AppStore>({
  isExplorerCollapsed: false,
  folders: [
    {
      files: [
        {
          icon: LucideFileJson,
          name: 'me.md',
          isCurrent: true,
          isOpen: true,
          content: me,
          language: 'markdown'
        },
        {
          icon: Braces,
          name: 'contacts.json',
          isCurrent: false,
          isOpen: false,
          content: contacts,
          language: 'json'
        }
      ],
      name: 'About',
      isOpen: true
    },
    {
      files: [
        {
          icon: Braces,
          name: 'projects.json',
          isCurrent: false,
          isOpen: false,
          content: projects,
          language: 'json'
        },
        {
          icon: Braces,
          name: 'education.json',
          isCurrent: false,
          isOpen: false,
          content: education,
          language: 'json'
        }
      ],
      name: 'Projects',
      isOpen: true
    }
  ]
})
