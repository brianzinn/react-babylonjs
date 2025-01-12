import { useLocalStorage } from '@mantine/hooks'
import { Language } from '@pluginPlayground/shared/constants'
import { LocalStorage, View } from '../constants'
import { makeId } from '../utils/makeId'

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

export const useLocalStorageGuid = () => {
  return useLocalStorage({
    key: LocalStorage.Guid,
    defaultValue: makeId(),
  })
}
