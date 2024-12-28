import { availablePresets } from '@babel/standalone'

export const GET_IMPORT = '__get_import'

export const babelPresets = [
  [availablePresets.react],
  [
    availablePresets.env,
    {
      targets: {
        chrome: 100,
        esmodules: true,
      },
    },
  ],
  [
    availablePresets.typescript,
    {
      allExtensions: true,
      isTSX: true,
    },
  ],
]
