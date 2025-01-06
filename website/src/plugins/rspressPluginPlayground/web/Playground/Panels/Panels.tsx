import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels'
import { SandpackCodeEditor, SandpackStack } from '@codesandbox/sandpack-react'
import { Runner } from '../Runner/Runner'
import { PanelsLayout } from '../Playground/Playground'
import styles from './Panels.module.css'

type PanelsProps = {
  isVertical?: boolean
  layout: PanelsLayout
}

export const Panels = (props: PanelsProps) => {
  const { layout, isVertical } = props

  const editor = <SandpackCodeEditor showRunButton={false} className={styles.sandpackStack} />

  const preview = (
    <SandpackStack className={styles.sandpackStack}>
      <Runner />
    </SandpackStack>
  )

  if (layout === PanelsLayout.Preview) {
    return preview
  }

  if (layout === PanelsLayout.Editor) {
    return editor
  }

  return (
    <PanelGroup
      direction={isVertical ? 'vertical' : 'horizontal'}
      autoSaveId="react-babylonjs-playground-panels"
    >
      <Panel className={styles.resizePanel} defaultSize={50}>
        {isVertical ? preview : editor}
      </Panel>

      <PanelResizeHandle className={styles.resizeHandle} hitAreaMargins={{ coarse: 0, fine: 0 }} />

      <Panel className={styles.resizePanel} defaultSize={50}>
        {isVertical ? editor : preview}
      </Panel>
    </PanelGroup>
  )
}
