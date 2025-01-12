import { useMemo } from 'react'
import { useSandpack } from '@codesandbox/sandpack-react'

export const useVisibleFiles = () => {
  const {
    sandpack: { files, visibleFilesFromProps },
  } = useSandpack()

  const visibleFiles = useMemo(
    () =>
      visibleFilesFromProps.reduce<Record<string, string>>((acc, fileName) => {
        acc[fileName] = files[fileName]?.code

        return acc
      }, {}),
    [visibleFilesFromProps, files]
  )

  return visibleFiles
}
