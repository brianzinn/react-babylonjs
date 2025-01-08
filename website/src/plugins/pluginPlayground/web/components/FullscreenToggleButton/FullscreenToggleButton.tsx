import { IconMaximize, IconMinimize } from '@tabler/icons-react'
import { RoundedButton } from '@codesandbox/sandpack-react'

type FullscreenToggleButtonProps = {
  onClick: () => void
  fullscreen: boolean
}

export const FullscreenToggleButton = ({ onClick, fullscreen }: FullscreenToggleButtonProps) => {
  const Icon = fullscreen ? IconMinimize : IconMaximize
  const text = fullscreen ? 'Exit fullscreen' : 'Fullscreen'

  return (
    <RoundedButton title="Fullscreen toggle" onClick={onClick}>
      <Icon /> <span>{text}</span>
    </RoundedButton>
  )
}
