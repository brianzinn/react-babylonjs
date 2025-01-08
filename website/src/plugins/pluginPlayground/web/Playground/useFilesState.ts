import { useState } from 'react'
import { SandpackState, SandpackFiles } from '@codesandbox/sandpack-react'
import { Language } from '../../shared/constants'
import { PlaygroundProps } from '../../shared/types'
import { useLocalStorageLanguage } from '../hooks/localStorage'

export const useFilesState = (props: PlaygroundProps) => {
  const [language] = useLocalStorageLanguage()

  const [files, setFiles] = useState(props.files)

  const onChangeLanguage = (nextLanguage: Language, sandpack: SandpackState) => {
    const prevFiles = sandpack.visibleFilesFromProps.reduce<SandpackFiles>((acc, fileName) => {
      acc[fileName] = sandpack.files[fileName]

      return acc
    }, {})

    setFiles((files) => ({
      ...files,
      [language]: prevFiles,
    }))

    for (const filePath of sandpack.visibleFilesFromProps) {
      sandpack.deleteFile(filePath)
    }

    sandpack.addFile(files[nextLanguage])
  }

  return {
    files: files[language],
    onChangeLanguage,
  }
}
