import './Preview.css'
import { OpenInCodeSandboxButton, SandpackStack, useActiveCode } from '@codesandbox/sandpack-react'
import { IconMaximize, IconMinimize } from '@tabler/icons-react'
import { Runner } from '../Runner/Runner'
import { Button } from '../Button/Button'

type PreviewProps = {
  className: string
  fullscreen: boolean
  toggleFullscreen: () => void
}

export const Preview = ({ className, fullscreen, toggleFullscreen }: PreviewProps) => {
  const { code } = useActiveCode()

  return (
    <SandpackStack className={className}>
      <Runner code={code} />

      <div className="preview-actions">
        <FullscreenToggleButton fullscreen={fullscreen} onClick={toggleFullscreen} />
        <OpenInCodeSandboxButton />
      </div>
    </SandpackStack>
  )
}

type FullscreenToggleButtonProps = {
  onClick: PreviewProps['toggleFullscreen']
  fullscreen: PreviewProps['fullscreen']
}

function FullscreenToggleButton({ onClick, fullscreen }: FullscreenToggleButtonProps) {
  return (
    <Button title="Fullscreen toggle" onClick={onClick}>
      {fullscreen ? (
        <>
          <IconMinimize /> Exit fullscreen
        </>
      ) : (
        <>
          <IconMaximize /> Enter fullscreen
        </>
      )}
    </Button>
  )
}
