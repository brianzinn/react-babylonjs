import { useDark } from '@rspress/core/runtime'
import { useActiveCode } from '@codesandbox/sandpack-react'
import Editor from '@monaco-editor/react'
import { useLocalStorageLanguage } from '../../hooks/localStorage'
import { EditorTheme } from './theme'
import { MonacoLanguage } from './constants'
import { initMonacoEditor } from './initMonacoEditor'

if (typeof window !== 'undefined') {
  initMonacoEditor()
}

export function MonacoEditor() {
  const isDark = useDark()
  const theme = isDark ? EditorTheme.Dark : EditorTheme.Light

  const [language] = useLocalStorageLanguage()
  const { code, updateCode } = useActiveCode()

  return (
    <Editor
      theme={theme}
      path="App.tsx"
      defaultLanguage="typescript"
      defaultValue={code}
      value={code}
      onChange={(code = '') => {
        updateCode(code, true)
      }}
      language={MonacoLanguage[language]}
      options={{
        fontSize: 14,
        lineNumbers: 'off',
        minimap: { enabled: false },
        quickSuggestions: true,
        scrollBeyondLastLine: false,
        scrollbar: {
          verticalScrollbarSize: 8,
          horizontalScrollbarSize: 8,
        },
      }}
    />
  )
}
