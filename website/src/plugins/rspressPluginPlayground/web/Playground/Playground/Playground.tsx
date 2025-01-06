import './Playground.css'
import React from 'react'
import { useDark } from 'rspress/runtime'
import { useFullscreen, useMediaQuery } from '@mantine/hooks'
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels'
import {
  SandpackProvider,
  SandpackCodeEditor,
  SandpackFiles,
  SandpackStack,
} from '@codesandbox/sandpack-react'
import { getDependencies } from './dependencies'
import { Runner } from '../Runner/Runner'
import { ControlPanel } from '../ControlPanel/ControlPanel'

export interface PlaygroundProps {
  files: string | SandpackFiles
  imports: string | string[]
}

// Tested self-hosted CS bundler (https://sandpack.codesandbox.io/docs/guides/hosting-the-bundler)
// Turned out even slower than the default one
// const SELF_HOSTED_BUNDLER_URL = 'https://steady-pegasus-0a8447.netlify.app/'

export const Playground = (props: PlaygroundProps) => {
  const isDarkTheme = useDark()
  const isVerticalLayout = useMediaQuery('(max-width: 768px)')
  const { ref: fullScreenRef, toggle: toggleFullscreen, fullscreen } = useFullscreen()

  const theme = isDarkTheme ? 'dark' : 'light'

  const files: SandpackFiles =
    typeof props.files === 'string' ? JSON.parse(props.files) : props.files

  const appFileName = Object.keys(files).find((fileName) => fileName.includes('App'))

  const regularHeight = isVerticalLayout ? '600px' : '400px'

  const layoutStyle = {
    height: fullscreen ? '100dvh' : regularHeight,
  } as React.CSSProperties

  // TODO: review this. We can get package.json at build time, and extract deps from it
  const dependencies = getDependencies(props.imports)

  const editor = <SandpackCodeEditor showRunButton={false} className="sandpack-stack" />

  const preview = (
    <SandpackStack className="sandpack-stack">
      <Runner />
    </SandpackStack>
  )

  return (
    <div style={{ maxWidth: '100%' }} ref={fullScreenRef}>
      <SandpackProvider
        template="react-ts"
        theme={theme}
        files={files}
        customSetup={{ dependencies }}
        options={{ activeFile: appFileName }}
      >
        <div className="playground-layout" style={layoutStyle}>
          <ControlPanel toggleFullscreen={toggleFullscreen} fullscreen={fullscreen} />

          <PanelGroup
            direction={isVerticalLayout ? 'vertical' : 'horizontal'}
            autoSaveId="react-babylonjs-playground-panels"
          >
            <Panel className="resizable-panel" defaultSize={50}>
              {isVerticalLayout ? preview : editor}
            </Panel>

            <PanelResizeHandle className="resize-handle" hitAreaMargins={{ coarse: 0, fine: 0 }} />

            <Panel className="resizable-panel" defaultSize={50}>
              {isVerticalLayout ? editor : preview}
            </Panel>
          </PanelGroup>
        </div>

        {/* Testing */}
        {/* <br />
        <SandpackLayout>
          <SandpackCodeEditor />
          <SandpackPreview />
        </SandpackLayout> */}
      </SandpackProvider>
    </div>
  )
}
