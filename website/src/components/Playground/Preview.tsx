import { OpenInCodeSandboxButton, useActiveCode } from '@codesandbox/sandpack-react'
import { Runner } from './Runner/Runner'
import { PlaygroundProps } from './Playground'

export const Preview = (props: Pick<PlaygroundProps, 'language' | 'files'>) => {
  const { code } = useActiveCode()

  return (
    <>
      <Runner language={props.language} code={code} />
      <div style={{ position: 'absolute', bottom: '8px', right: '8px' }}>
        <OpenInCodeSandboxButton />
      </div>
    </>
  )
}
