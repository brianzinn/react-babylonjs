import './global.css'
import clsx from 'clsx'
import { useDark } from 'rspress/runtime'
import { useElementSize, useFullscreen, useMergedRef } from '@mantine/hooks'
import { SandpackProvider } from '@codesandbox/sandpack-react'
import { PlaygroundProps } from '@pluginPlayground/shared/types'
import { EntryFiles, Language } from '@pluginPlayground/shared/constants'
import { Panels } from '../Panels/Panels'
import { ControlPanel } from '../ControlPanel/ControlPanel'
import { useLocalStorageLanguage } from '../../hooks/localStorage'
import { useFilesState } from './useFilesState'
import styles from './Playground.module.css'

type PlaygroundStringifiedProps = {
  [Key in keyof PlaygroundProps]: string
}

export const Playground = (props: PlaygroundStringifiedProps) => {
  const isDarkTheme = useDark()
  const fullscreenProps = useFullscreen()
  const [language] = useLocalStorageLanguage()

  const wrapperSize = useElementSize()
  const smallScreen = wrapperSize.width < 550

  const wrapperRef = useMergedRef(fullscreenProps.ref, wrapperSize.ref)

  const parsedProps = parseProps(props)

  const { files, onChangeLanguage } = useFilesState(parsedProps)

  const wrapperClass = clsx(styles.wrapper, {
    [styles.fullscreen]: fullscreenProps.fullscreen,
    [styles.fullHeight]: parsedProps.fullHeight,
  })

  const fullHeightPanels = Boolean(fullscreenProps.fullscreen || parsedProps.fullHeight)

  return (
    <div className={wrapperClass} ref={wrapperRef}>
      <SandpackProvider
        files={files}
        // `react(-ts)` is a CRA template
        // seems to launch faster than `vite-react(-ts)`
        template={language === Language.tsx ? 'react-ts' : 'react'}
        theme={isDarkTheme ? 'dark' : 'light'}
        customSetup={{ dependencies: parsedProps.dependencies }}
        options={{ activeFile: EntryFiles[language] }}
        className={styles.sandpackProvider}
      >
        <div className={styles.layout}>
          <ControlPanel
            smallScreen={smallScreen}
            onChangeLanguage={onChangeLanguage}
            fullscreen={fullscreenProps.fullscreen}
            toggleFullscreen={fullscreenProps.toggle}
          />

          <Panels isVertical={smallScreen} fullHeight={fullHeightPanels} />
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
