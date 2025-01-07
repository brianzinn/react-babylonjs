import React from 'react'
import { useDebouncedCallback } from '@mantine/hooks'
import { useSandpack } from '@codesandbox/sandpack-react'
import { getComponentFromCode } from './compiler'
import styles from './Runner.module.css'

const DEBOUNCE_TIME = 800

const _Runner = () => {
  const [error, setError] = React.useState<Error | undefined>()
  const [component, setComponent] = React.useState<React.ReactNode | null>(null)

  const {
    sandpack: { files, visibleFilesFromProps },
  } = useSandpack()

  const compile = React.useCallback(
    async (files: Record<string, string>) => {
      console.info('compiling')

      try {
        const start = performance.now()
        const component = await getComponentFromCode(files)
        const end = performance.now()

        console.info(
          `%c${Math.round(end - start)}ms to transpile`,
          'background: #15889f; padding: 6px; color: white;'
        )

        if (component) {
          setError(undefined)
          setComponent(React.createElement(component))
        }
      } catch (e) {
        console.error(e)
        setError(e as Error)
      }
    },
    [setComponent, setError]
  )

  const debouncedCompile = useDebouncedCallback(compile, DEBOUNCE_TIME)

  const visibleFiles = React.useMemo(
    () =>
      visibleFilesFromProps.reduce<Record<string, string>>((acc, fileName) => {
        acc[fileName] = files[fileName].code

        return acc
      }, {}),
    []
  )

  React.useEffect(() => {
    console.log('effect')

    debouncedCompile(visibleFiles)
  }, [visibleFiles, debouncedCompile])

  return (
    <div className={styles.runner}>
      {component}
      {error && <pre className={styles.error}>{error.message}</pre>}
    </div>
  )
}

export const Runner = React.memo(_Runner)
