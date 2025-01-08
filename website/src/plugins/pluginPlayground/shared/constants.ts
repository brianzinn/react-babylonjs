export enum Language {
  tsx = 'tsx',
  jsx = 'jsx',
}

export const ENTRY_FILE_BASE = 'App'

export const EntryFiles: Record<Language, string> = {
  [Language.tsx]: `${ENTRY_FILE_BASE}.tsx`,
  [Language.jsx]: `${ENTRY_FILE_BASE}.jsx`,
}
