import { javascript } from '@codemirror/lang-javascript'
import { vscodeDark, vscodeLight } from '@uiw/codemirror-theme-vscode'
import CodeMirror from '@uiw/react-codemirror'
import { useDark } from 'rspress/runtime'
import { useActiveCode } from '../../../hooks/useActiveCode'
import './EditorCodeMirror.css'

export const EditorCodeMirror = () => {
  const theme = useDark() ? vscodeDark : vscodeLight
  const { code, updateCode } = useActiveCode()

  return (
    <CodeMirror
      value={code}
      onChange={updateCode}
      extensions={[javascript({ jsx: true, typescript: true })]}
      theme={theme}
      basicSetup={{
        lineNumbers: false,
        foldGutter: false,
        autocompletion: false,
      }}
    />
  )
}
