import { slateDark } from '@radix-ui/colors'
import { Github } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export function Footer() {
  const { t } = useTranslation()

  return (
    <div
      style={{ background: slateDark.slate4 }}
      className="hover: flex h-6 w-full items-center justify-end gap-1 border-zinc-700 border-t px-3 text-[#8F8CA8]"
    >
      <a
        href="https://github.com/madilima/vscode-portfolio"
        className="flex items-center gap-1 text-xs hover:text-[#E0DEF2]"
      >
        <Github size={12} />
        {t('footer.github')}
      </a>
    </div>
  )
}
