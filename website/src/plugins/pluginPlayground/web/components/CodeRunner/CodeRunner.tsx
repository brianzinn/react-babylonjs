import { createElement, ReactNode, useState } from 'react'
import { useDebouncedCallback, useShallowEffect } from '@mantine/hooks'
import { Language } from '@pluginPlayground/shared/constants'
import { useLocalStorageLanguage } from '../../hooks/localStorage'
import { compileComponentFromFiles } from './compiler'

const DEBOUNCE_TIME = 500

type CodeRunnerProps = {
  files: Record<string, string>
  setError: (error: Error | undefined) => void
}

export const CodeRunner = ({ files, setError }: CodeRunnerProps) => {
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
        setError(undefined)
        setComponent(createElement(component))
      }
    } catch (e) {
      console.error(e)
      setError(e as Error)
    }
  }

  const getComponentDebounced = useDebouncedCallback(getComponent, DEBOUNCE_TIME)

  useShallowEffect(() => {
    getComponentDebounced(files, language)
  }, [getComponentDebounced, files, language])

  return component
}
