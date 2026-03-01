import { Editor } from './components/editor'
import { injectOneko } from './scripts/inject-oneko'

injectOneko()

export function App() {
  return (
    <div className="relative z-10 flex h-screen items-center justify-center p-20 max-xl:p-2">
      <Editor />
    </div>
  )
}
