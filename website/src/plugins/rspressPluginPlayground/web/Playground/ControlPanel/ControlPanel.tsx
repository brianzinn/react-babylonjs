import { OpenInCodeSandboxButton } from '@codesandbox/sandpack-react'
import { FullscreenToggleButton } from '../FullscreenToggleButton/FullscreenToggleButton'
import styles from './ControlPanel.module.css'

type ControlPanelProps = {
  fullscreen: boolean
  toggleFullscreen: () => void
}

export const ControlPanel = (props: ControlPanelProps) => {
  const { toggleFullscreen, fullscreen } = props

  return (
    <div className={styles.wrapper}>
      <div className={styles.section}></div>

      <div className={styles.section}>
        <FullscreenToggleButton fullscreen={fullscreen} onClick={toggleFullscreen} />
        <OpenInCodeSandboxButton />
      </div>
    </div>
  )
}
