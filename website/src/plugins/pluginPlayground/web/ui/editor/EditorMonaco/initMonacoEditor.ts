import { type Monaco, loader } from '@monaco-editor/react'
import { shikiToMonaco } from '@shikijs/monaco'
import typeDeclarations from '_playground_virtual_types'
import { createHighlighter } from 'shiki'
import { MonacoTheme } from './constants'

const DEFAULT_MONACO_URL = 'https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs'

export async function initMonacoEditor() {
  loader.config({
    paths: { vs: DEFAULT_MONACO_URL },
  })

  const monaco = await loader.init()

  // Register the languageIds first. Only registered languages will be highlighted.
  monaco.languages.register({ id: 'jsx' })
  monaco.languages.register({ id: 'tsx' })

  const highlighter = await createHighlighter({
    themes: [MonacoTheme.Dark, MonacoTheme.Light],
    langs: ['javascript', 'typescript', 'jsx', 'tsx'],
  })

  shikiToMonaco(highlighter, monaco)
  setTypescriptDefault(monaco)
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
  const dtsEntries = Object.entries(typeDeclarations)
  // ts.javascriptDefaults.setCompilerOptions(compilerOptions)

  for (const [path, content] of dtsEntries) {
    ts.typescriptDefaults.addExtraLib(content, `file:///${path}`)
  }
}
