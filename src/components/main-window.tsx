import { slateDark } from '@radix-ui/colors'
import type { ReactNode } from 'react'

interface MainWindowProps {
  children: ReactNode
}

export function MainWindow(props: MainWindowProps) {
  const { children } = props

  return (
    <div
      className="flex aspect-video max-w-[1480px] flex-1 flex-col overflow-hidden rounded-lg border border-[#72707D] shadow-black/20 shadow-md"
      style={{ background: slateDark.slate3 }}
    >
      {children}
    </div>
  )
}
