import { SandpackFiles } from '@codesandbox/sandpack-react'
import { Language } from './constants'

export type PlaygroundProps = {
  standalone?: boolean
  files: Record<Language, SandpackFiles>
  dependencies: Record<string, string>
}
