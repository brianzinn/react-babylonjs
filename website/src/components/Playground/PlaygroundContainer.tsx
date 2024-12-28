import './PlaygroundContainer.css'
import { useFullscreen } from '@mantine/hooks'
import { IconMaximize } from '@tabler/icons-react'
import { ActionIcon } from '../ActionIcon/ActionIcon'
import { Playground, PlaygroundProps } from './Playground'

const actionsHeight = '40px'

export const PlaygroundContainer = (props: PlaygroundProps) => {
  const { ref, toggle, fullscreen } = useFullscreen()

  return (
    <div className={'playgroundContainer'}>
      <div className="playgroundActions" style={{ height: actionsHeight }}>
        <ActionIcon title="Enter fullscreen" onClick={toggle}>
          <IconMaximize />
        </ActionIcon>
      </div>

      <div ref={ref}>
        <Playground {...props} height={fullscreen ? '100dvh' : '400px'} />
      </div>
    </div>
  )
}
