import clsx from 'clsx'
import { useSandpack, SandpackState, OpenInCodeSandboxButton } from '@codesandbox/sandpack-react'
import { Language } from '@pluginPlayground/shared/constants'
import { View } from '../../constants'
import { ToggleButtonGroup } from '../ToggleButtonGroup/ToggleButtonGroup'
import { FullscreenToggleButton } from '../FullscreenToggleButton/FullscreenToggleButton'
import { useLocalStorageLanguage, useLocalStorageView } from '../../hooks/localStorage'
import { getViewValues, LanguageValues } from './labels'
import styles from './ControlPanel.module.css'

type ControlPanelProps = {
  smallScreen: boolean
  fullscreen: boolean
  toggleFullscreen: () => void
  onChangeLanguage: (value: Language, sandpack: SandpackState) => void
}

export const ControlPanel = (props: ControlPanelProps) => {
  const { smallScreen, fullscreen, toggleFullscreen, onChangeLanguage } = props

  const [view, setView] = useLocalStorageView()
  const [language, setLanguage] = useLocalStorageLanguage()

  const { sandpack } = useSandpack()

  const handleSetLanguage = (nextLanguage: Language) => {
    if (nextLanguage === language) return

    onChangeLanguage(nextLanguage, sandpack)
    setLanguage(nextLanguage)
  }

  return (
    <div className={styles.wrapper}>
      <ToggleButtonGroup
        values={getViewValues(smallScreen)}
        activeValue={view}
        setValue={setView}
      />

      {view !== View.Preview && (
        <ToggleButtonGroup
          values={LanguageValues}
          activeValue={language}
          setValue={handleSetLanguage}
        />
      )}

      <div className={clsx(styles.section, { [styles.smallScreen]: smallScreen })}>
        <FullscreenToggleButton
          smallScreen={smallScreen}
          fullscreen={fullscreen}
          onClick={toggleFullscreen}
        />
        <OpenInCodeSandboxButton />
      </div>
    </div>
  )
}
