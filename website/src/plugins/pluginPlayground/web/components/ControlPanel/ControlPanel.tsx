import { useSandpack, SandpackState, OpenInCodeSandboxButton } from '@codesandbox/sandpack-react'
import { Language } from '@pluginPlayground/shared/constants'
import { View } from '../../constants'
import { ToggleButtonGroup } from '../ToggleButtonGroup/ToggleButtonGroup'
import { FullscreenToggleButton } from '../FullscreenToggleButton/FullscreenToggleButton'
import { useLocalStorageLanguage, useLocalStorageView } from '../../hooks/localStorage'
import { useIsVertical } from '../../hooks/misc'
import { LanguageLabels } from './labels'
import styles from './ControlPanel.module.css'

type ControlPanelProps = {
  fullscreen: boolean
  toggleFullscreen: () => void
  onChangeLanguage: (value: Language, sandpack: SandpackState) => void
}

export const ControlPanel = (props: ControlPanelProps) => {
  const { fullscreen, toggleFullscreen, onChangeLanguage } = props

  const [view, setView] = useLocalStorageView()
  const [language, setLanguage] = useLocalStorageLanguage()
  const isVertical = useIsVertical()

  const { sandpack } = useSandpack()

  const handleSetLanguage = (nextLanguage: Language) => {
    if (nextLanguage === language) return

    onChangeLanguage(nextLanguage, sandpack)
    setLanguage(nextLanguage)
  }

  return (
    <div className={styles.wrapper}>
      <ToggleButtonGroup values={Object.values(View)} activeValue={view} setValue={setView} />

      {view !== View.Preview && (
        <ToggleButtonGroup
          values={LanguageLabels}
          activeValue={language}
          setValue={handleSetLanguage}
        />
      )}

      {!isVertical && (
        <div className={styles.section}>
          <FullscreenToggleButton fullscreen={fullscreen} onClick={toggleFullscreen} />
          <OpenInCodeSandboxButton />
        </div>
      )}
    </div>
  )
}
