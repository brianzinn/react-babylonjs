import { useLocalStorage } from '@mantine/hooks'
import { Language } from '@pluginPlayground/shared/constants'
import { LocalStorage, View } from '../constants'
import { makeId } from '../utils/makeId'

const defaultValue = {
  language: Language.tsx,
  view: View.Preview,
  authorGuid: makeId(),
}

export const useLocalStorageSettings = () => {
  return useLocalStorage({
    defaultValue,
    key: LocalStorage.Settings,
  })
}

export const useLocalStorageView = () => {
  const [settings, setSettings] = useLocalStorageSettings()

  return {
    view: settings.view,
    setView: (view: View) => setSettings({ ...settings, view }),
  }
}

export const useLocalStorageLanguage = () => {
  const [settings, setSettings] = useLocalStorageSettings()

  return {
    language: settings.language,
    setLanguage: (language: Language) => setSettings({ ...settings, language }),
  }
}

export const useLocalStorageGuid = () => {
  const [settings, setSettings] = useLocalStorageSettings()

  return {
    authorGuid: settings.authorGuid,
    setAuthorGuid: (authorGuid: string) => setSettings({ ...settings, authorGuid }),
  }
}
