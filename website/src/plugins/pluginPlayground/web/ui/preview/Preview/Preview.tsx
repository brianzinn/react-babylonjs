import { useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { useFiles } from '../../../hooks/useCurrentFiles'
import { CodeRunner } from '../CodeRunner/CodeRunner'
import styles from './Preview.module.css'

export const Preview = () => {
  const { currentFiles } = useFiles()
  const [error, setError] = useState<Error | undefined>()

  const errorOverlay = error ? <pre className={styles.error}>{error?.message}</pre> : null

  return (
    <div className={styles.wrapper}>
      <ErrorBoundary onError={setError} resetKeys={[currentFiles]} fallback={errorOverlay}>
        <CodeRunner files={currentFiles} setError={setError} />
      </ErrorBoundary>
      {errorOverlay}
    </div>
  )
}
