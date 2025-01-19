import Editor from '@monaco-editor/react'
import { useDark } from '@rspress/core/runtime'
import { useState, useEffect } from 'react'
import { useActiveCode } from '../../../hooks/useActiveCode'
import { useLocalStorageLanguage } from '../../../hooks/useLocalStorageSettings'
import { useQuerySnippetOnce } from '../../../hooks/useQuerySnippetOnce'
// import { useUpdateSnippet } from '../../../hooks/useUpdateSnippet'
import { MonacoTheme } from './constants'
import styles from './EditorMonaco.module.css'
import { initMonacoEditor } from './initMonacoEditor'

export function EditorMonaco() {
  const [editorReady, setEditorReady] = useState(false)
  const [loading, setLoading] = useState(false)
  const theme = useDark() ? MonacoTheme.Dark : MonacoTheme.Light

  const { language } = useLocalStorageLanguage()
  const { code, updateCode } = useActiveCode()

  useEffect(() => {
    initMonacoEditor().then(() => setEditorReady(true))
  }, [])

  useQuerySnippetOnce(setLoading)
  // const saveToDb = useUpdateSnippet()

  return (
    <div className={styles.wrapper}>
      {editorReady === true && (
        <Editor
          theme={theme}
          path="App.tsx"
          defaultLanguage="tsx"
          value={code}
          onChange={(code = '') => {
            updateCode(code)
            // saveToDb(code)
          }}
          language={language}
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
      )}
      {(editorReady !== true || loading) && <div className={styles.loadingOverlay}>Loading...</div>}
    </div>
  )
}
