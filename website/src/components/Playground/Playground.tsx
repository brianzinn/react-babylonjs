import React from 'react'
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackStack,
} from '@codesandbox/sandpack-react'
import { useDark } from 'rspress/runtime'
import { Preview } from './Preview'
import { defaultFiles } from './constants/defaultFiles'
import { defaultDependencies, dependencies } from './constants/dependencies'

export interface PlaygroundProps {
  files: string | Record<string, string>
  language: 'tsx'
  height?: string
}

export const Playground = (props: PlaygroundProps) => {
  const isDarkTheme = useDark()
  const theme = isDarkTheme ? 'dark' : 'light'

  const deps = { ...dependencies, ...defaultDependencies }
  const files = typeof props.files === 'string' ? JSON.parse(props.files) : props.files
  const firstFileName = Object.keys(props.files)[0]

  const layoutStyle = {
    '--sp-layout-height': props.height,
  } as React.CSSProperties

  return (
    <>
      <SandpackProvider
        template="react-ts"
        theme={theme}
        files={{ ...files, ...defaultFiles }}
        customSetup={{ dependencies: deps }}
        options={{ activeFile: firstFileName }}
      >
        <SandpackLayout style={layoutStyle}>
          <SandpackCodeEditor wrapContent showTabs={false} showRunButton={false} />

          <SandpackStack
            style={{
              height: 'var(--sp-layout-height)',
            }}
          >
            <Preview files={files} language={props.language} />
          </SandpackStack>
        </SandpackLayout>
      </SandpackProvider>
    </>
  )
}
