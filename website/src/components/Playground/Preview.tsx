import { OpenInCodeSandboxButton, useActiveCode } from '@codesandbox/sandpack-react'
import { Runner } from './Runner/Runner'

export const Preview = () => {
  const { code } = useActiveCode()

  return (
    <>
      <Runner code={code} />
      <div style={{ position: 'absolute', bottom: '8px', right: '8px' }}>
        <OpenInCodeSandboxButton />
      </div>
    </>
  )
}
