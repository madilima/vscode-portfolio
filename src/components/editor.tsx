import { useStore } from '@tanstack/react-store'
import {
  LucideBug,
  LucideCog,
  LucideFiles,
  LucideFlaskConical,
  LucideGitFork,
  LucideMonitor,
  LucidePuzzle,
  LucideSearch,
  LucideUser
} from 'lucide-react'

import { appStore } from '../lib/app-store'
import { Code } from './code'
import { Explorer } from './explorer'
import { Footer } from './footer'
import { MainWindow } from './main-window'
import { Sidebar } from './sidebar'
import { Tabs } from './tabs'
import { WindowFrame } from './window-frame'

export function Editor() {
  const currentFile = useStore(appStore, store => {
    return store.folders
      .flatMap(folder => folder.files)
      .find(file => file.isCurrent)
  })

  return (
    <MainWindow>
      <WindowFrame
        title={currentFile ? `${currentFile.name} — madilima` : 'madilima'}
      />

      <div className="flex flex-1 grow">
        <Sidebar
          items={[
            { icon: LucideFiles, id: 'files', isSelected: true },
            { icon: LucideSearch, id: 'search', isSelected: false },
            { icon: LucideGitFork, id: 'gitfork', isSelected: false },
            { icon: LucideBug, id: 'bug', isSelected: false },
            { icon: LucidePuzzle, id: 'extensions', isSelected: false },
            { icon: LucideMonitor, id: 'monitor', isSelected: false },
            { icon: LucideFlaskConical, id: 'tests', isSelected: false }
          ]}
          footerItems={[
            { icon: LucideUser, id: 'files', isSelected: false },
            { icon: LucideCog, id: 'search', isSelected: false }
          ]}
        />

        <Explorer />

        <div className="flex grow flex-col">
          <Tabs />

          <Code
            content={currentFile?.content}
            language={currentFile?.language}
          />
        </div>
      </div>

      <Footer />
    </MainWindow>
  )
}
