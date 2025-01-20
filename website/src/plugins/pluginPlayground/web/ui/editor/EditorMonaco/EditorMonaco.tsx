import Editor from '@monaco-editor/react'
import { useDark } from '@rspress/core/runtime'
import { useState } from 'react'
import { useActiveCode } from '../../../hooks/useActiveCode'
import { useLocalStorageLanguage } from '../../../hooks/useLocalStorageSettings'
import { useQuerySnippetOnce } from '../../../hooks/useQuerySnippetOnce'
// import { useUpdateSnippet } from '../../../hooks/useUpdateSnippet'
import { MonacoLanguage, MonacoTheme } from './constants'
import styles from './EditorMonaco.module.css'
import { initMonacoEditor } from './initMonacoEditor'

if (typeof window !== 'undefined') {
  initMonacoEditor()
}

export function EditorMonaco() {
  const [loading, setLoading] = useState(false)
  const theme = useDark() ? MonacoTheme.Dark : MonacoTheme.Light

  const { language } = useLocalStorageLanguage()
  const { code, updateCode } = useActiveCode()

  useQuerySnippetOnce(setLoading)
  // const saveToDb = useUpdateSnippet()

  return (
    <div className={styles.wrapper}>
      <Editor
        theme={theme}
        path="App.tsx"
        value={code}
        onChange={(code = '') => {
          updateCode(code)
          // saveToDb(code)
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
      {loading && <div className={styles.loadingOverlay}>Loading...</div>}
    </div>
  )
}
