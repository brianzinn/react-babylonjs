import { IconMaximize, IconMinimize } from '@tabler/icons-react'
import { RoundedButton } from '@codesandbox/sandpack-react'

type FullscreenToggleButtonProps = {
  onClick: () => void
  fullscreen: boolean
  smallScreen: boolean
}

export const FullscreenToggleButton = ({
  onClick,
  fullscreen,
  smallScreen,
}: FullscreenToggleButtonProps) => {
  const Icon = fullscreen ? IconMinimize : IconMaximize
  const text = fullscreen ? 'Exit fullscreen' : 'Fullscreen'

  return (
    <RoundedButton title="Fullscreen toggle" onClick={onClick}>
      <Icon /> {smallScreen ? null : <span>{text}</span>}
    </RoundedButton>
  )
}
