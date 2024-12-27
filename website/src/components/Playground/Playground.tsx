import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackStack,
  SandpackPreview,
} from '@codesandbox/sandpack-react'
import { useDark } from 'rspress/runtime'
import { Preview } from './Preview'
import { defaultDependencies, dependencies } from './constants/dependencies'
import { defaultFiles } from './constants/defaultFiles'

export interface PlaygroundProps {
  files: string | Record<string, string>
  language: 'tsx'
}

export const Playground = (props: PlaygroundProps) => {
  const isDarkTheme = useDark()
  const theme = isDarkTheme ? 'dark' : 'light'

  const deps = { ...dependencies, ...defaultDependencies }
  const files = typeof props.files === 'string' ? JSON.parse(props.files) : props.files
  const firstFileName = Object.keys(props.files)[0]

  return (
    <SandpackProvider
      template="react-ts"
      files={{ ...files, ...defaultFiles }}
      theme={theme}
      customSetup={{
        dependencies: deps,
      }}
      options={{
        activeFile: firstFileName,
      }}
    >
      <SandpackLayout>
        <SandpackCodeEditor wrapContent showTabs={false} showRunButton={false} />

        <SandpackStack
          style={{
            height: 'var(--sp-layout-height)',
          }}
        >
          <Preview files={files} language={props.language} />
        </SandpackStack>
      </SandpackLayout>

      {/* <SandpackLayout>
        <SandpackCodeEditor />
        <SandpackPreview />
      </SandpackLayout> */}
    </SandpackProvider>
  )
}
