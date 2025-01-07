import './global.css'
import React from 'react'
import { useDark } from 'rspress/runtime'
import { useFullscreen, useLocalStorage, useMediaQuery } from '@mantine/hooks'
import { SandpackProvider, SandpackFiles } from '@codesandbox/sandpack-react'
import { Panels } from '../Panels/Panels'
import { ControlPanel } from '../ControlPanel/ControlPanel'
import { PanelsLayout } from '../constants'

export interface PlaygroundProps {
  files: string | SandpackFiles
  dependencies: string | Record<string, string>
}

// props come JSON.stringified to pass around code snippets,
// and not to break mdx markup
const parseProp = <T extends PlaygroundProps[keyof PlaygroundProps]>(prop: string | T) =>
  typeof prop === 'string' ? (JSON.parse(prop) as T) : prop

export const Playground = (props: PlaygroundProps) => {
  const isDarkTheme = useDark()
  const fullscreen = useFullscreen()
  const isVertical = useMediaQuery('(max-width: 768px)')

  const [layout, setLayout] = useLocalStorage({
    key: 'react-babylonjs-playground-layout',
    defaultValue: PanelsLayout.Preview,
  })

  const theme = isDarkTheme ? 'dark' : 'light'
  const isPreview = layout === PanelsLayout.Preview

  const files = parseProp(props.files)
  const dependencies = parseProp(props.dependencies)

  const appFileName = Object.keys(files).find((fileName) => fileName.includes('App'))

  const verticalHeight = isPreview ? '400px' : '600px'
  const height = isVertical ? verticalHeight : '400px'

  const layoutStyle = {
    height: fullscreen.fullscreen ? '100dvh' : height,
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid var(--sp-colors-surface2)',
  } as React.CSSProperties

  return (
    <div style={{ maxWidth: '100%' }} ref={fullscreen.ref}>
      <SandpackProvider
        template="react-ts"
        theme={theme}
        files={files}
        customSetup={{ dependencies }}
        options={{ activeFile: appFileName }}
      >
        <div style={layoutStyle}>
          <ControlPanel
            layout={layout}
            setLayout={setLayout}
            toggleFullscreen={fullscreen.toggle}
            fullscreen={fullscreen.fullscreen}
          />

          <Panels layout={layout} isVertical={isVertical} />
        </div>
      </SandpackProvider>
    </div>
  )
}
