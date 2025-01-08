import { createElement, ReactNode, useState } from 'react'
import { useDebouncedCallback, useShallowEffect } from '@mantine/hooks'
import { Language } from '../../shared/constants'
import { compileComponentFromFiles } from './compiler'
import { useFiles } from './useFiles'
import { useLocalStorageLanguage } from '../hooks/localStorage'

const DEBOUNCE_TIME = 500

type CodeRunnerProps = {
  onError: (error: Error | undefined) => void
}

export const CodeRunner = ({ onError }: CodeRunnerProps) => {
  const [component, setComponent] = useState<ReactNode | null>(null)

  const [language] = useLocalStorageLanguage()

  const getComponent = async (files: Record<string, string>, language: Language) => {
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
        onError(undefined)
        setComponent(createElement(component))
      }
    } catch (e) {
      console.error(e)
      onError(e as Error)
    }
  }

  const files = useFiles()
  const getComponentDebounced = useDebouncedCallback(getComponent, DEBOUNCE_TIME)

  useShallowEffect(() => {
    getComponentDebounced(files, language)
  }, [getComponentDebounced, files, language])

  return component
}
