import { View } from '../../../constants'
import { useLocalStorageLanguage, useLocalStorageView } from '../../../hooks/localStorage'
import { useSnippetId } from '../../../hooks/location'
import { ToggleButtonGroup } from '../../components/ToggleButtonGroup/ToggleButtonGroup'
import { ButtonCopy } from '../ButtonCopy/ButtonCopy'
import { ButtonCreateNew } from '../ButtonCreateNew/ButtonCreateNew'
import { ButtonFork } from '../ButtonFork/ButtonFork'
import { ButtonFullscreen } from '../ButtonFullscreen/ButtonFullscreen'
import styles from './ControlPanel.module.css'
import { LanguageValues, getViewValues } from './labels'
import { ControlPanelProps } from './types'
import { useWrapperEl } from './useWrapperEl'

export const ControlPanel = ({ fullscreen }: ControlPanelProps) => {
  const snippetId = useSnippetId()
  const wrapperEl = useWrapperEl()

  const [view, setView] = useLocalStorageView()
  const [language, setLanguage] = useLocalStorageLanguage()

  return (
    <div className={styles.wrapper} ref={wrapperEl.ref} data-icon-buttons={wrapperEl.isTight}>
      <ToggleButtonGroup
        values={getViewValues(wrapperEl.isTight)}
        activeValue={view}
        setValue={setView}
      />

      <div className={styles.section}>
        {view !== View.Preview && (
          <ToggleButtonGroup
            values={LanguageValues}
            activeValue={language}
            setValue={setLanguage}
          />
        )}
      </div>

      <div className={styles.section}>
        {snippetId && (
          <>
            <ButtonCopy />
            <ButtonFork snippetId={snippetId} />
            <ButtonCreateNew />
          </>
        )}
        <ButtonFullscreen fullscreen={fullscreen} />
      </div>
    </div>
  )
}
