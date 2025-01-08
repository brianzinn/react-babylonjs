import { useLocalStorage } from '@mantine/hooks'
import { LocalStorage, PanelsLayout } from '../constants'
import { Language } from '@pluginPlayground/shared/constants'

export const useLocalStorageLayout = () => {
  return useLocalStorage({
    key: LocalStorage.layout,
    defaultValue: PanelsLayout.Preview,
  })
}

export const useLocalStorageLanguage = () => {
  return useLocalStorage({
    key: LocalStorage.language,
    defaultValue: Language.tsx,
  })
}
