import { useDark } from 'rspress/runtime'
import { Sandpack, SandpackFiles } from '@codesandbox/sandpack-react'
import { dependencies } from './dependencies'
import { defaultFiles } from './defaultFiles'

type SandpackPlaygroundProps = {
  files: string | SandpackFiles
}

export default function SandpackPlayground(props: SandpackPlaygroundProps) {
  const isDarkTheme = useDark()
  const filesProp = typeof props.files === 'string' ? JSON.parse(props.files) : props.files

  const firstFileName = Object.keys(filesProp)[0]

  return (
    <Sandpack
      template="react-ts"
      files={{ ...filesProp, ...defaultFiles }}
      theme={isDarkTheme ? 'dark' : 'light'}
      customSetup={{
        dependencies,
      }}
      options={{
        activeFile: firstFileName,
        wrapContent: true,
        editorHeight: 400,
      }}
    />
  )
}
