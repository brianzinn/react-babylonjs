import { createElement, ReactNode, useState } from 'react'
import { useDebouncedCallback, useShallowEffect } from '@mantine/hooks'
import { compileComponentFromFiles } from './compiler'
import { useFiles } from './useFiles'

const DEBOUNCE_TIME = 500

type CodeRunnerProps = {
  onError: (error: Error | undefined) => void
}

export const CodeRunner = ({ onError }: CodeRunnerProps) => {
  const [component, setComponent] = useState<ReactNode | null>(null)

  const getComponent = async (files: Record<string, string>) => {
    try {
      const start = performance.now()
      const component = await compileComponentFromFiles(files)
      const end = performance.now()

      console.info(
        `%c${Math.round(end - start)}ms to transpile`,
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
    getComponentDebounced(files)
  }, [getComponentDebounced, files])

  return component
}
