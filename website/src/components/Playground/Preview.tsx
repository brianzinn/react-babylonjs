import {
  OpenInCodeSandboxButton,
  useActiveCode,
  useTranspiledCode,
} from '@codesandbox/sandpack-react'
import { Runner } from './Runner/Runner'
import { PlaygroundProps } from './Playground'

export const Preview = (props: PlaygroundProps) => {
  const { language } = props
  const { code } = useActiveCode()

  return (
    <>
      <Runner language={language} code={code} />
      <div style={{ position: 'absolute', bottom: '8px', right: '8px' }}>
        <OpenInCodeSandboxButton />
      </div>
    </>
  )
}
