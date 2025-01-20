import { type Monaco, loader } from '@monaco-editor/react'
import { shikiToMonaco } from '@shikijs/monaco'
import typeDeclarations from '_playground_virtual_types'
import { createHighlighter } from 'shiki'
import { MonacoTheme } from './constants'

const highlighter = await createHighlighter({
  themes: [MonacoTheme.Dark, MonacoTheme.Light],
  langs: ['javascript', 'typescript', 'tsx', 'jsx'],
  langAlias: { typescript: 'tsx', javascript: 'jsx' },
})

const DEFAULT_MONACO_URL = 'https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs'

export function initMonacoEditor() {
  loader.config({
    paths: { vs: DEFAULT_MONACO_URL },
  })

  loader.init().then((monaco) => {
    shikiToMonaco(highlighter, monaco)
    setJsTsDefaults(monaco)
  })
}

function setJsTsDefaults(monaco: Monaco) {
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
  ts.javascriptDefaults.setCompilerOptions(compilerOptions)

  const dtsEntries = Object.entries(typeDeclarations)

  for (const [path, content] of dtsEntries) {
    ts.typescriptDefaults.addExtraLib(content, `file:///${path}`)
    ts.javascriptDefaults.addExtraLib(content, `file:///${path}`)
  }
}
