import { slateDark } from '@radix-ui/colors'
import { Github } from 'lucide-react'

export function Footer() {
  return (
    <div
      style={{ background: slateDark.slate4 }}
      className="hover: flex h-6 w-full items-center justify-end gap-1 border-zinc-700 border-t px-3 text-[#8F8CA8]"
    >
      <a
        href="/"
        className="flex items-center gap-1 text-xs hover:text-[#E0DEF2]"
      >
        <Github size={12} />
        GitHub
      </a>
    </div>
  )
}
