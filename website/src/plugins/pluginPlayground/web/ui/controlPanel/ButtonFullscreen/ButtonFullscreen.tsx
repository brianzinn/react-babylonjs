import { IconMaximize, IconMinimize } from '@tabler/icons-react'
import { Button } from '../../components/Button/Button'
import { ControlPanelProps } from '../ControlPanel/types'

type ButtonFullscreenProps = Pick<ControlPanelProps, 'fullscreen'>

export const ButtonFullscreen = (props: ButtonFullscreenProps) => {
  const { fullscreen } = props

  const Icon = fullscreen.fullscreen ? IconMinimize : IconMaximize
  const text = fullscreen.fullscreen ? 'Exit fullscreen' : 'Fullscreen'

  return (
    <Button text={text} icon={<Icon />} title="Toggle fullscreen" onClick={fullscreen.toggle} />
  )
}
