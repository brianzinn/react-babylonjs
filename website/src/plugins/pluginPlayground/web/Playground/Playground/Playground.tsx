import './global.css'
import React from 'react'
import { useDark } from 'rspress/runtime'
import { useFullscreen, useMediaQuery } from '@mantine/hooks'
import { SandpackProvider, SandpackFiles } from '@codesandbox/sandpack-react'
import { Panels } from '../Panels/Panels'
import { ControlPanel } from '../ControlPanel/ControlPanel'
import { getDependencies } from './dependencies'
import { PanelsLayout } from '../constants'

export interface PlaygroundProps {
  files: string | SandpackFiles
  imports: string | string[]
}

export const Playground = (props: PlaygroundProps) => {
  const isDarkTheme = useDark()
  const fullscreen = useFullscreen()
  const isVertical = useMediaQuery('(max-width: 768px)')

  const [layout, setLayout] = React.useState<PanelsLayout>(PanelsLayout.Preview)

  const theme = isDarkTheme ? 'dark' : 'light'
  const isPreview = layout === PanelsLayout.Preview

  const files: SandpackFiles =
    typeof props.files === 'string' ? JSON.parse(props.files) : props.files

  const appFileName = Object.keys(files).find((fileName) => fileName.includes('App'))

  const verticalHeight = isPreview ? '400px' : '600px'
  const height = isVertical ? verticalHeight : '400px'

  const layoutStyle = {
    height: fullscreen.fullscreen ? '100dvh' : height,
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid var(--sp-colors-surface2)',
  } as React.CSSProperties

  // TODO: review this. We can get package.json at build time, and extract deps from it
  const dependencies = getDependencies(props.imports)

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
