import './global.css'
import clsx from 'clsx'
import { useDark } from 'rspress/runtime'
import { useFullscreen, useLocalStorage, useMediaQuery } from '@mantine/hooks'
import { SandpackProvider, SandpackFiles } from '@codesandbox/sandpack-react'
import { Panels } from '../Panels/Panels'
import { ControlPanel } from '../ControlPanel/ControlPanel'
import { PanelsLayout } from '../constants'
import styles from './Playground.module.css'

export interface PlaygroundProps {
  files: string | SandpackFiles
  dependencies: string | Record<string, string>
}

// props come JSON.stringified at build time
// (to pass around code snippets, and not to break mdx markup)
const parseProp = <T extends PlaygroundProps[keyof PlaygroundProps]>(prop: string | T) =>
  typeof prop === 'string' ? (JSON.parse(prop) as T) : prop

export const Playground = (props: PlaygroundProps) => {
  const isDarkTheme = useDark()
  const fullscreenProps = useFullscreen()
  const isVertical = useMediaQuery('(max-width: 768px)')

  const [layout, setLayout] = useLocalStorage({
    key: 'react-babylonjs-playground-layout',
    defaultValue: PanelsLayout.Preview,
  })

  const theme = isDarkTheme ? 'dark' : 'light'

  const files = parseProp(props.files)
  const dependencies = parseProp(props.dependencies)

  const appFileName = Object.keys(files).find((fileName) => fileName.includes('App'))

  const panelsClass = clsx(styles.panels, {
    [styles.vertical]: isVertical,
    [styles.fullscreen]: fullscreenProps.fullscreen,
    [styles.singlePanel]: layout !== PanelsLayout.Split,
  })

  const layoutClass = clsx(styles.layout, {
    [styles.fullscreen]: fullscreenProps.fullscreen,
  })

  return (
    <div className={styles.wrapper} ref={fullscreenProps.ref}>
      <SandpackProvider
        template="react-ts"
        theme={theme}
        files={files}
        customSetup={{ dependencies }}
        options={{ activeFile: appFileName }}
      >
        <div className={layoutClass}>
          <ControlPanel
            layout={layout}
            setLayout={setLayout}
            fullscreen={fullscreenProps.fullscreen}
            toggleFullscreen={fullscreenProps.toggle}
          />

          <div className={panelsClass}>
            <Panels layout={layout} isVertical={isVertical} />
          </div>
        </div>
      </SandpackProvider>
    </div>
  )
}
