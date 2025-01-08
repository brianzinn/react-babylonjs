import './global.css'
import clsx from 'clsx'
import { useDark } from 'rspress/runtime'
import { useFullscreen } from '@mantine/hooks'
import { SandpackProvider } from '@codesandbox/sandpack-react'
import { PlaygroundProps } from '@pluginPlayground/shared/types'
import { EntryFiles } from '@pluginPlayground/shared/constants'
import { Panels } from '../Panels/Panels'
import { ControlPanel } from '../ControlPanel/ControlPanel'
import { PanelsLayout } from '../../constants'
import { useIsVertical } from '../../hooks/misc'
import { useLocalStorageLanguage, useLocalStorageLayout } from '../../hooks/localStorage'
import { useFilesState } from './useFilesState'
import styles from './Playground.module.css'

type PlaygroundStringifiedProps = {
  [Key in keyof PlaygroundProps]: string
}

export const Playground = (props: PlaygroundStringifiedProps) => {
  const isDarkTheme = useDark()
  const isVertical = useIsVertical()
  const fullscreenProps = useFullscreen()

  const [layout] = useLocalStorageLayout()
  const [language] = useLocalStorageLanguage()

  const parsedProps = parseProps(props)

  const { files, onChangeLanguage } = useFilesState(parsedProps)

  const panelsClass = clsx(styles.panels, {
    [styles.vertical]: isVertical,
    [styles.fullscreen]: fullscreenProps.fullscreen,
    [styles.singlePanel]: layout !== PanelsLayout.SplitView,
  })

  const layoutClass = clsx(styles.layout, {
    [styles.fullscreen]: fullscreenProps.fullscreen,
  })

  return (
    <div className={styles.wrapper} ref={fullscreenProps.ref}>
      <SandpackProvider
        files={files}
        // `react(-ts)` is a CRA template
        // seems to launch faster than `vite-react(-ts)`
        template={'react-ts'}
        theme={isDarkTheme ? 'dark' : 'light'}
        customSetup={{ dependencies: parsedProps.dependencies }}
        options={{ activeFile: EntryFiles[language] }}
      >
        <div className={layoutClass}>
          <ControlPanel
            onChangeLanguage={onChangeLanguage}
            fullscreen={fullscreenProps.fullscreen}
            toggleFullscreen={fullscreenProps.toggle}
          />

          <div className={panelsClass}>
            <Panels />
          </div>
        </div>
      </SandpackProvider>
    </div>
  )
}

/**
 * Parse props, as they come JSON.stringified.
 * Without stringification passing object types as props in MDX tend to break things.
 */
function parseProps(props: PlaygroundStringifiedProps): PlaygroundProps {
  return Object.fromEntries(
    Object.entries(props).map(([key, value]) => {
      return [key, JSON.parse(value)]
    })
  ) as PlaygroundProps
}
