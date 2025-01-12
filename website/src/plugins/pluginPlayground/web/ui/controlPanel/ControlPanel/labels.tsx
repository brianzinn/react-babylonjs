import { Language } from '@pluginPlayground/shared/constants'
import { IconBrandVscode, IconCode, IconEye } from '@tabler/icons-react'
import { View } from '../../../constants'

export const LanguageValues = [
  { value: Language.tsx, label: 'TS' },
  { value: Language.jsx, label: 'JS' },
]

export const getViewValues = (showIcons?: boolean) => [
  { value: View.Preview, label: showIcons ? <IconEye /> : View.Preview },
  { value: View.Code, label: showIcons ? <IconCode /> : View.Code },
  { value: View.Split, label: showIcons ? <IconBrandVscode /> : View.Split },
]
