import { useFullscreen } from '@mantine/hooks'
import clsx from 'clsx'
import { KeyboardEventHandler } from 'react'
import type { PlaygroundProps } from '../../../../shared/types'
import { FilesProvider } from '../../../context/Files'
import { useIsPlaygroundPage } from '../../../hooks/location'
import { ControlPanel } from '../../controlPanel/ControlPanel/ControlPanel'
import { ResizablePanels } from '../ResizablePanels/ResizablePanels'
import './global.css'
import styles from './Playground.module.css'

type PlaygroundStringifiedProps = {
  [Key in keyof PlaygroundProps]: string
}

export const Playground = (props: PlaygroundStringifiedProps) => {
  const parsedProps = parseProps(props)
  const isPlaygroundPage = useIsPlaygroundPage()
  const fullscreen = useFullscreen()

  const wrapperClass = clsx(styles.wrapper, {
    [styles.fullHeight]: isPlaygroundPage,
  })

  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (e) => {
    // to avoid interfering with the Rspress global event listeners
    e.stopPropagation()
  }

  return (
    <FilesProvider initialValue={parsedProps}>
      <div className={wrapperClass} ref={fullscreen.ref} onKeyDown={handleKeyDown}>
        <ControlPanel fullscreen={fullscreen} />
        <ResizablePanels />
      </div>
    </FilesProvider>
  )
}

/**
 * Parse props, as they come JSON.stringified.
 * Without stringification having code strings (props.files) in MDX tends to break things.
 */
function parseProps(props: PlaygroundStringifiedProps): PlaygroundProps {
  return Object.fromEntries(
    Object.entries(props).map(([key, value]) => {
      return [key, JSON.parse(value)]
    })
  ) as PlaygroundProps
}
