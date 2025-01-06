import { IconMaximize, IconMinimize } from '@tabler/icons-react'
import { Button } from '../Button/Button'

type FullscreenToggleButtonProps = {
  onClick: () => void
  fullscreen: boolean
}

export const FullscreenToggleButton = ({ onClick, fullscreen }: FullscreenToggleButtonProps) => {
  return (
    <Button title="Fullscreen toggle" onClick={onClick}>
      {fullscreen ? (
        <>
          <IconMinimize /> Exit fullscreen
        </>
      ) : (
        <>
          <IconMaximize /> Fullscreen
        </>
      )}
    </Button>
  )
}
