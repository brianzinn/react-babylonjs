import React from 'react'
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackStack,
  SandpackFiles,
} from '@codesandbox/sandpack-react'
import { useDark } from 'rspress/runtime'
import { Preview } from './Preview'
import { defaultFiles } from './constants/defaultFiles'
import { defaultDependencies, dependencies } from './constants/dependencies'

export interface PlaygroundProps {
  files: string | SandpackFiles
  height?: string
}

// Tested self-hosted CS bundler (https://sandpack.codesandbox.io/docs/guides/hosting-the-bundler)
// Turned out even slower than the default one
// const SELF_HOSTED_BUNDLER_URL = 'https://steady-pegasus-0a8447.netlify.app/'

export const Playground = (props: PlaygroundProps) => {
  const isDarkTheme = useDark()
  const theme = isDarkTheme ? 'dark' : 'light'

  const deps = { ...dependencies, ...defaultDependencies }
  const files: SandpackFiles =
    typeof props.files === 'string' ? JSON.parse(props.files) : props.files
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
          <SandpackCodeEditor showRunButton={false} />

          <SandpackStack>
            <Preview />
          </SandpackStack>
        </SandpackLayout>
      </SandpackProvider>
    </>
  )
}
