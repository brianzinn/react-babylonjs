import { SandpackProvider, SandpackLayout, SandpackCodeEditor } from '@codesandbox/sandpack-react'
import { useDark } from 'rspress/runtime'
import { Preview } from './Preview'

export interface PlaygroundProps {
  files: string | Record<string, string>
  language: 'tsx'
}

export const Playground = (props: PlaygroundProps) => {
  const isDarkTheme = useDark()
  const theme = isDarkTheme ? 'dark' : 'light'

  const files = typeof props.files === 'string' ? JSON.parse(props.files) : props.files

  return (
    <SandpackProvider template="react-ts" files={files} theme={theme}>
      <SandpackLayout>
        <SandpackCodeEditor wrapContent />
        <Preview files={files} language={props.language} />
      </SandpackLayout>
    </SandpackProvider>
  )
}
