import { OpenInCodeSandboxButton } from '@codesandbox/sandpack-react'
import { FullscreenToggleButton } from '../FullscreenToggleButton/FullscreenToggleButton'
import styles from './ControlPanel.module.css'
import { LayoutToggle } from '../LayoutToggle/LayoutToggle'
import { PanelsLayout } from '../constants'

type ControlPanelProps = {
  layout: PanelsLayout
  setLayout: (value: PanelsLayout) => void
  fullscreen: boolean
  toggleFullscreen: () => void
}

export const ControlPanel = (props: ControlPanelProps) => {
  const { toggleFullscreen, fullscreen, layout, setLayout } = props

  return (
    <div className={styles.wrapper}>
      <div className={styles.section}>
        <LayoutToggle layout={layout} setLayout={setLayout} />
      </div>

      <div className={styles.section}>
        <FullscreenToggleButton fullscreen={fullscreen} onClick={toggleFullscreen} />
        <OpenInCodeSandboxButton />
      </div>
    </div>
  )
}
