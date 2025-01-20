import { useSearchParams } from 'rspress/runtime'
import { SearchParams, View } from '../../../constants'
import {
  useLocalStorageLanguage,
  useLocalStorageView,
} from '../../../hooks/useLocalStorageSettings'
import { useIsPlaygroundPage } from '../../../hooks/location'
import { ToggleButtonGroup } from '../../components/ToggleButtonGroup/ToggleButtonGroup'
import { ButtonCopyLink } from '../ButtonCopyLink/ButtonCopyLink'
import { ButtonCreateNew } from '../ButtonCreateNew/ButtonCreateNew'
import { ButtonFork } from '../ButtonFork/ButtonFork'
import { ButtonFullscreen } from '../ButtonFullscreen/ButtonFullscreen'
import { ButtonSandbox } from '../ButtonSandbox/ButtonSandbox'
import { ButtonSave } from '../ButtonSave/ButtonSave'
import styles from './ControlPanel.module.css'
import { LanguageValues, getViewValues } from './labels'
import { ControlPanelProps } from './types'
import { useWrapperEl } from './useWrapperEl'

export const ControlPanel = ({ fullscreen }: ControlPanelProps) => {
  const wrapperEl = useWrapperEl()
  const isPlaygroundPage = useIsPlaygroundPage()

  const [searchParams] = useSearchParams()
  const snippetId = searchParams.get(SearchParams.SnippetId)
  const forkedFromId = searchParams.get(SearchParams.ForkedFromId)

  const { view, setView } = useLocalStorageView()
  const { language, setLanguage } = useLocalStorageLanguage()

  return (
    <div className={styles.wrapper} ref={wrapperEl.ref} data-icon-buttons={wrapperEl.isTight}>
      <div className={styles.section}>
        <ToggleButtonGroup
          values={getViewValues(wrapperEl.isTight)}
          activeValue={view}
          setValue={setView}
        />
        <ButtonFullscreen fullscreen={fullscreen} />
      </div>

      {view !== View.Preview && (
        <ToggleButtonGroup values={LanguageValues} activeValue={language} setValue={setLanguage} />
      )}

      <div className={styles.section}>
        {isPlaygroundPage && <ButtonSave forkedFromId={forkedFromId} />}
        {isPlaygroundPage && snippetId && (
          <>
            <ButtonFork snippetId={snippetId} />
            <ButtonCopyLink />
            <ButtonCreateNew />
          </>
        )}
        <ButtonSandbox />
      </div>
    </div>
  )
}
