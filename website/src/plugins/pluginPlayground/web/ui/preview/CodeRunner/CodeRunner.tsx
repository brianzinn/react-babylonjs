import type { FilesEntry } from '@/src/plugins/pluginPlayground/shared/types'
import { useDebouncedCallback } from '@mantine/hooks'
import type { Language } from '@pluginPlayground/shared/constants'
import { type ReactNode, createElement, useEffect, useState } from 'react'
import { useLocalStorageLanguage } from '../../../hooks/localStorage'
import { compileComponentFromFiles } from './compiler'

const DEBOUNCE_TIME = 500

type CodeRunnerProps = {
  files: FilesEntry
  setError: (error: Error | undefined) => void
}

export const CodeRunner = ({ files, setError }: CodeRunnerProps) => {
  const [language] = useLocalStorageLanguage()
  const [component, setComponent] = useState<ReactNode | null>(null)

  const getComponent = async (files: FilesEntry, language: Language) => {
    try {
      const start = performance.now()
      const component = await compileComponentFromFiles(files, language)
      const end = performance.now()

      const diff = Math.round(end - start)
      console.info(
        `%cTranspiled ${language.toUpperCase()} in ${diff}ms`,
        'background: #15889f; padding: 6px; color: white;'
      )

      if (component) {
        setError(undefined)
        setComponent(createElement(component))
      }
    } catch (e) {
      console.error(e)
      setError(e as Error)
    }
  }

  const getComponentDebounced = useDebouncedCallback(getComponent, DEBOUNCE_TIME)

  useEffect(() => {
    getComponentDebounced(files, language)
  }, [getComponentDebounced, files, language])

  return component
}
