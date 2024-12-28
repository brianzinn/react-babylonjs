import './Preview.css'
import { OpenInCodeSandboxButton, SandpackStack, useActiveCode } from '@codesandbox/sandpack-react'
import { IconMaximize } from '@tabler/icons-react'
import { Runner } from './Runner/Runner'
import { Button } from '../Button/Button'

type PreviewProps = {
  className: string
  toggleFullscreen: () => void
}

export const Preview = ({ className, toggleFullscreen }: PreviewProps) => {
  const { code } = useActiveCode()

  return (
    <SandpackStack className={className}>
      <Runner code={code} />

      <div className="preview-actions">
        <Button title="Enter fullscreen" onClick={toggleFullscreen}>
          <IconMaximize /> Fullscreen
        </Button>
        <OpenInCodeSandboxButton />
      </div>
    </SandpackStack>
  )
}
