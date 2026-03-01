interface WindowFrameProps {
  title: string
}

export function WindowFrame(props: WindowFrameProps) {
  const { title } = props

  return (
    <div className="flex h-8 items-center justify-between border-zinc-700 border-b px-3">
      <div className="flex items-center gap-2">
        <button
          type="button"
          className="h-3 w-3 rounded-full bg-[#ED6A5E]"
        ></button>
        <button
          type="button"
          className="h-3 w-3 rounded-full bg-[#F4BF4F]"
        ></button>
        <button
          type="button"
          className="h-3 w-3 rounded-full bg-[#61C554]"
        ></button>
      </div>
      <span className="text-[#908caa] text-sm">{title}</span>

      <div className="w-14">&nbsp;</div>
    </div>
  )
}
