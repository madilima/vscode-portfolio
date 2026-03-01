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

import { Explorer } from './explorer'
import { Footer } from './footer'
import { MainWindow } from './main-window'
import { Sidebar } from './sidebar'
import { Tabs } from './tabs'
import { WindowFrame } from './window-frame'

export function Editor() {
  return (
    <MainWindow>
      <WindowFrame title="batatinha.tsx" />

      <div className="flex grow self-start">
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

        <Tabs />
      </div>

      <Footer />
    </MainWindow>
  )
}
