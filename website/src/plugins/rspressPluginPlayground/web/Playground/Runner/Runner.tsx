import './Runner.css'
import React, { useEffect, useRef, useState } from 'react'
import { useSandpack } from '@codesandbox/sandpack-react'
import { babelTransform } from './babelTransform'
import { moduleStringToComponent } from './moduleStringToComponent'

interface RunnerProps {
  className?: string
}

const DEBOUNCE_TIME = 800

export const Runner = (props: RunnerProps) => {
  const [error, setError] = useState<Error | undefined>()
  const [component, setComponent] = useState<React.ReactNode | null>(null)

  const { sandpack } = useSandpack()
  const { files, visibleFilesFromProps } = sandpack
  const appFileName = visibleFilesFromProps.find((fileName) => fileName.includes('App'))
  const code = appFileName && files[appFileName] ? files[appFileName]?.code : ''

  function doCompile(targetCode: string) {
    try {
      const transformedCode = babelTransform(targetCode)

      if (!transformedCode) {
        return
      }

      const defaultExport = moduleStringToComponent(transformedCode)?.default
      // console.log(component?.toString())

      if (defaultExport) {
        setError(undefined)
        setComponent(React.createElement(defaultExport))
      } else {
        setError(new Error('No default export'))
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

      doCompile(code)
    }, DEBOUNCE_TIME)
  }, [code])

  return (
    <div className={`playground-runner ${props.className ?? ''}`}>
      {component}
      {error && <pre className="playground-error">{error.message}</pre>}
    </div>
  )
}
