import { useEffect, useState } from 'react'
import { getSingletonHighlighter } from 'shiki'

interface CodeProps {
    content?: string
    language?: 'json' | 'markdown'
}

export function Code(props: CodeProps) {
  const [processedCode, setProcessedCode] = useState('')

  const { content, language } = props


  useEffect(() => {
    async function process() {
        if(!content || !language) {
            setProcessedCode('')

            return
        }

      const highlighter = await getSingletonHighlighter({
        themes: ['github-dark'],
        langs: [language,],
      })

      const code = highlighter.codeToHtml(content, {
        lang: language,
        theme: 'github-dark'
      })

      setProcessedCode(code)
    }

    process()
  }, [content, language])

  return (
    <div className='relative flex flex-1 grow bg-[#24292e]'>
      <div
        id="shiki-code"
        dangerouslySetInnerHTML={{ __html: processedCode }}
        className="scrollbar scrollbar-thumb-[#2B283B] scrollbar-track-transparent absolute inset-0 overflow-auto leading-relaxed"
      />
    </div>
  )
}
