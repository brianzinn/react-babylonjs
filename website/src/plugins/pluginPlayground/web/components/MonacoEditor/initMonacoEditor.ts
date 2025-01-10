import typeDeclarations from '_playground_virtual_types'
import { loader, Monaco } from '@monaco-editor/react'
import { shikiToMonaco } from '@shikijs/monaco'
import { createHighlighter } from 'shiki'
import { EditorTheme } from './theme'

const highlighter = await createHighlighter({
  themes: [EditorTheme.Dark, EditorTheme.Light],
  langs: ['javascript', 'typescript'],
})

const DEFAULT_MONACO_URL = 'https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs'

export function initMonacoEditor() {
  loader.config({
    paths: { vs: DEFAULT_MONACO_URL },
  })

  loader.init().then((monaco) => {
    shikiToMonaco(highlighter, monaco)
    setTypescriptDefault(monaco)
  })
}

function setTypescriptDefault(monaco: Monaco) {
  const ts = monaco.languages.typescript

  const compilerOptions = {
    allowSyntheticDefaultImports: true,
    typeRoots: ['node_modules/'],
    jsx: ts.JsxEmit.React,
  }
  // Turn off squiggly errors, if need be
  // ts.typescriptDefaults.setDiagnosticsOptions({
  //   noSemanticValidation: true,
  //   noSyntaxValidation: true,
  // })

  ts.typescriptDefaults.setCompilerOptions(compilerOptions)
  // ts.javascriptDefaults.setCompilerOptions(compilerOptions)

  Object.entries(typeDeclarations).forEach(([path, content]) => {
    ts.typescriptDefaults.addExtraLib(content, path)
  })
}
