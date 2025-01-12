import { useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorOverlay } from '@codesandbox/sandpack-react'
import { CodeRunner } from '../CodeRunner/CodeRunner'
import { useVisibleFiles } from './useVisibleFiles'
import styles from './Preview.module.css'

export const Preview = () => {
  const files = useVisibleFiles()
  const [error, setError] = useState<Error | undefined>()

  const errorOverlay = error ? <ErrorOverlay>{error?.message}</ErrorOverlay> : null

  return (
    <div className={styles.wrapper}>
      <ErrorBoundary onError={setError} resetKeys={[files]} fallback={errorOverlay}>
        <CodeRunner files={files} setError={setError} />
      </ErrorBoundary>
      {errorOverlay}
    </div>
  )
}
