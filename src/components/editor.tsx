import { useStore } from '@tanstack/react-store'
import {
  Github,
  Instagram,
  Languages,
  Linkedin,
  LucideBug,
  LucideCog,
  LucideFiles,
  LucideFlaskConical,
  LucideGitFork,
  LucideMonitor,
  LucidePuzzle,
  LucideSearch,
  LucideUser,
  Mail,
  MessagesSquare
} from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { type AppLanguage, appStore, setAppLanguage } from '../lib/app-store'
import { Code } from './code'
import { Explorer } from './explorer'
import { Footer } from './footer'
import { MainWindow } from './main-window'
import { Sidebar } from './sidebar'
import { Tabs } from './tabs'
import { WindowFrame } from './window-frame'

export function Editor() {
  const { i18n, t } = useTranslation()

  function handleLanguageChange(language: AppLanguage) {
    setAppLanguage(language)
    void i18n.changeLanguage(language)
  }

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
              pulse: true,
              items: [
                {
                  label: t('profile.linkedin'),
                  icon: Linkedin,
                  onClick: () =>
                    window.open(
                      'https://www.linkedin.com/in/madi-pereira/',
                      '_blank'
                    )
                },
                {
                  label: t('profile.github'),
                  icon: Github,
                  onClick: () =>
                    window.open('https://github.com/madilima', '_blank')
                },
                {
                  label: t('profile.whatsapp'),
                  icon: MessagesSquare,
                  onClick: () =>
                    window.open('https://whatsa.me/5551999040062', '_blank')
                },
                {
                  label: t('profile.email'),
                  icon: Mail,
                  onClick: () =>
                    window.open('mailto:madulpereira28@gmail.com', '_blank')
                },
                {
                  label: t('profile.instagram'),
                  icon: Instagram,
                  onClick: () =>
                    window.open('https://www.instagram.com/m_itsm3/', '_blank')
                }
              ]
            },
            {
              icon: LucideCog,
              id: 'settings',
              isSelected: false,
              pulse: true,
              items: [
                {
                  label: t('language.portuguese'),
                  icon: Languages,
                  onClick: () => handleLanguageChange('pt')
                },
                {
                  label: t('language.english'),
                  icon: Languages,
                  onClick: () => handleLanguageChange('en')
                }
              ]
            }
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
