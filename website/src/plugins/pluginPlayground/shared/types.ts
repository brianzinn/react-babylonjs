import type { Language } from './constants'

export type FilesEntry = Record<string, string>

export type PlaygroundProps = {
  files: Record<Language, FilesEntry>
  dependencies: Record<string, string>
}
