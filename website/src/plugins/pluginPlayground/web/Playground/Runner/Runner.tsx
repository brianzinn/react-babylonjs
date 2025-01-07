import clsx from 'clsx'
import React, { useEffect, useRef, useState } from 'react'
import { useSandpack } from '@codesandbox/sandpack-react'
import { getComponentFromCode } from './compiler'
import styles from './Runner.module.css'

interface RunnerProps {
  className?: string
}

const DEBOUNCE_TIME = 800

export const Runner = (props: RunnerProps) => {
  const [error, setError] = useState<Error | undefined>()
  const [component, setComponent] = useState<React.ReactNode | null>(null)

  const {
    sandpack: { files, visibleFilesFromProps },
  } = useSandpack()

  async function doCompile() {
    try {
      const visibleFiles = visibleFilesFromProps.reduce<Record<string, string>>((acc, fileName) => {
        acc[fileName] = files[fileName].code

        return acc
      }, {})

      const start = performance.now()
      const component = await getComponentFromCode(visibleFiles)
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
  }

  const waitTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (waitTimeoutRef.current) {
      clearTimeout(waitTimeoutRef.current)
    }

    waitTimeoutRef.current = setTimeout(() => {
      waitTimeoutRef.current = null

      doCompile()
    }, DEBOUNCE_TIME)
  }, [files])

  return (
    <div className={clsx(styles.runner, props.className)}>
      {component}
      {error && <pre className={styles.error}>{error.message}</pre>}
    </div>
  )
}
