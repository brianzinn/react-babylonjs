import './Playground.css'
import React from 'react'
import { useDark } from 'rspress/runtime'
import { useFullscreen, useMediaQuery } from '@mantine/hooks'
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels'
import { SandpackProvider, SandpackCodeEditor, SandpackFiles } from '@codesandbox/sandpack-react'
import { Preview } from '../Preview/Preview'
import { getDependencies } from './dependencies'

export interface PlaygroundProps {
  files: string | SandpackFiles
  importPaths: string | string[]
}

// Tested self-hosted CS bundler (https://sandpack.codesandbox.io/docs/guides/hosting-the-bundler)
// Turned out even slower than the default one
// const SELF_HOSTED_BUNDLER_URL = 'https://steady-pegasus-0a8447.netlify.app/'

export const Playground = (props: PlaygroundProps) => {
  const isDarkTheme = useDark()
  const isSmallScreen = useMediaQuery('(max-width: 768px)')
  const { ref: fullScreenRef, toggle: toggleFullscreen, fullscreen } = useFullscreen()

  const theme = isDarkTheme ? 'dark' : 'light'

  const files: SandpackFiles =
    typeof props.files === 'string' ? JSON.parse(props.files) : props.files

  const firstFileName = Object.keys(files)[0]

  const regularHeight = isSmallScreen ? '600px' : '400px'

  const layoutStyle = {
    height: fullscreen ? '100dvh' : regularHeight,
  } as React.CSSProperties

  const dependencies = getDependencies(props.importPaths)

  return (
    <div style={{ maxWidth: '100%' }} ref={fullScreenRef}>
      <SandpackProvider
        template="react-ts"
        theme={theme}
        files={files}
        customSetup={{ dependencies }}
        options={{ activeFile: firstFileName }}
      >
        <div className="playground-layout" style={layoutStyle}>
          <PanelGroup
            direction={isSmallScreen ? 'vertical' : 'horizontal'}
            autoSaveId="react-babylonjs-playground-panels"
          >
            <Panel className="resizable-panel" defaultSize={60}>
              <SandpackCodeEditor showRunButton={false} className="sandpack-stack" />
            </Panel>

            <PanelResizeHandle className="resize-handle" hitAreaMargins={{ coarse: 0, fine: 0 }} />

            <Panel className="resizable-panel" defaultSize={40}>
              <Preview toggleFullscreen={toggleFullscreen} className="sandpack-stack" />
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
