import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels'
import { SandpackCodeEditor, SandpackStack } from '@codesandbox/sandpack-react'
import { Preview } from '../Preview/Preview'
import { PanelsLayout } from '../../constants'
import { useIsVertical } from '../../hooks/misc'
import { useLocalStorageLayout } from '../../hooks/localStorage'
import styles from './Panels.module.css'

export const Panels = () => {
  const isVertical = useIsVertical()
  const [layout] = useLocalStorageLayout()

  const editor = <SandpackCodeEditor showRunButton={false} className={styles.sandpackStack} />

  const preview = (
    <SandpackStack className={styles.sandpackStack}>
      <Preview />
    </SandpackStack>
  )

  if (layout === PanelsLayout.Preview) {
    return preview
  }

  if (layout === PanelsLayout.Code) {
    return editor
  }

  return (
    <PanelGroup
      direction={isVertical ? 'vertical' : 'horizontal'}
      autoSaveId="react-babylonjs-playground"
    >
      <Panel defaultSize={50}>{isVertical ? preview : editor}</Panel>

      <PanelResizeHandle className={styles.resizeHandle} hitAreaMargins={{ coarse: 0, fine: 0 }} />

      <Panel defaultSize={50}>{isVertical ? editor : preview}</Panel>
    </PanelGroup>
  )
}
