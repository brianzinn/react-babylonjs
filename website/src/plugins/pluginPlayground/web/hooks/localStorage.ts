import { useLocalStorage } from '@mantine/hooks'
import { LocalStorage, View } from '../constants'
import { Language } from '@pluginPlayground/shared/constants'

export const useLocalStorageView = () => {
  return useLocalStorage({
    key: LocalStorage.View,
    defaultValue: View.Preview,
  })
}

export const useLocalStorageLanguage = () => {
  return useLocalStorage({
    key: LocalStorage.Language,
    defaultValue: Language.tsx,
  })
}
