import { Store } from '@tanstack/react-store'
import { Braces, LucideFileJson } from 'lucide-react'

import contactsEn from '../assets/en/contacts.json?raw'
import educationEn from '../assets/en/education.json?raw'
import meEn from '../assets/en/me.md?raw'
import projectsEn from '../assets/en/projects.json?raw'
import contactsPt from '../assets/pt/contacts.json?raw'
import educationPt from '../assets/pt/education.json?raw'
import mePt from '../assets/pt/me.md?raw'
import projectsPt from '../assets/pt/projects.json?raw'
import i18n from '../i18n'

export type AppLanguage = 'en' | 'pt'
type FileId = 'me' | 'contacts' | 'projects' | 'education'
type FolderId = 'about' | 'projects'

type File = {
  id: FileId
  content: string
  language: 'json' | 'markdown'
  name: string
  icon: typeof Braces
  isCurrent: boolean
  isOpen: boolean
}

type Folder = {
  id: FolderId
  name: string
  files: Array<File>
  isOpen: boolean
}

type AppStore = {
  isExplorerCollapsed: boolean
  folders: Array<Folder>
}

const contentByLanguage: Record<AppLanguage, Record<FileId, string>> = {
  en: {
    contacts: contactsEn,
    education: educationEn,
    me: meEn,
    projects: projectsEn
  },
  pt: {
    contacts: contactsPt,
    education: educationPt,
    me: mePt,
    projects: projectsPt
  }
}

const folderDefinitions = [
  {
    files: [
      {
        icon: LucideFileJson,
        id: 'me',
        isCurrent: true,
        isOpen: true,
        language: 'markdown',
        name: 'me.md'
      },
      {
        icon: Braces,
        id: 'contacts',
        isCurrent: false,
        isOpen: false,
        language: 'json',
        name: 'contacts.json'
      }
    ],
    id: 'about',
    isOpen: true,
    name: 'About'
  },
  {
    files: [
      {
        icon: Braces,
        id: 'projects',
        isCurrent: false,
        isOpen: false,
        language: 'json',
        name: 'projects.json'
      },
      {
        icon: Braces,
        id: 'education',
        isCurrent: false,
        isOpen: false,
        language: 'json',
        name: 'education.json'
      }
    ],
    id: 'projects',
    isOpen: true,
    name: 'Projects'
  }
] as const

function normalizeLanguage(language: string): AppLanguage {
  return language.toLowerCase().startsWith('pt') ? 'pt' : 'en'
}

function buildFolders(language: AppLanguage, previousFolders?: Array<Folder>) {
  const previousFoldersById = new Map(
    previousFolders?.map(folder => [folder.id, folder]) ?? []
  )
  const previousFilesById = new Map(
    previousFolders?.flatMap(folder =>
      folder.files.map(file => [file.id, file] as const)
    ) ?? []
  )

  return folderDefinitions.map(folderDefinition => {
    const previousFolder = previousFoldersById.get(folderDefinition.id)

    return {
      ...folderDefinition,
      files: folderDefinition.files.map(fileDefinition => {
        const previousFile = previousFilesById.get(fileDefinition.id)

        return {
          ...fileDefinition,
          content: contentByLanguage[language][fileDefinition.id],
          isCurrent: previousFile?.isCurrent ?? fileDefinition.isCurrent,
          isOpen: previousFile?.isOpen ?? fileDefinition.isOpen
        }
      }),
      isOpen: previousFolder?.isOpen ?? folderDefinition.isOpen
    }
  })
}

const initialLanguage = normalizeLanguage(
  i18n.resolvedLanguage ?? i18n.language
)

export const appStore = new Store<AppStore>({
  isExplorerCollapsed: false,
  folders: buildFolders(initialLanguage)
})

export function setAppLanguage(language: AppLanguage) {
  appStore.setState(prev => ({
    ...prev,
    folders: buildFolders(language, prev.folders)
  }))
}
