import { useStore } from '@tanstack/react-store'
import {
  Github,
  Instagram,
  Linkedin,
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
            {
              icon: LucideFiles,
              id: 'files',
              isSelected: true,
              onClick: () => {
                appStore.setState(prev => ({
                  ...prev,
                  isExplorerCollapsed: !prev.isExplorerCollapsed
                }))
              }
            },
            { icon: LucideSearch, id: 'search', isSelected: false },
            { icon: LucideGitFork, id: 'gitfork', isSelected: false },
            { icon: LucideBug, id: 'bug', isSelected: false },
            { icon: LucidePuzzle, id: 'extensions', isSelected: false },
            { icon: LucideMonitor, id: 'monitor', isSelected: false },
            { icon: LucideFlaskConical, id: 'tests', isSelected: false }
          ]}
          footerItems={[
            {
              icon: LucideUser,
              id: 'user',
              isSelected: false,
              items: [
                {
                  label: 'LinkedIn',
                  icon: Linkedin,
                  onClick: () =>
                    window.open(
                      'https://www.linkedin.com/in/madi-pereira/',
                      '_blank'
                    )
                },
                {
                  label: 'GitHub',
                  icon: Github,
                  onClick: () =>
                    window.open('https://github.com/madilima', '_blank')
                },
                {
                  label: 'Insagram',
                  icon: Instagram,
                  onClick: () =>
                    window.open('https://www.instagram.com/m_itsm3/', '_blank')
                }
              ]
            },
            { icon: LucideCog, id: 'settings', isSelected: false }
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
