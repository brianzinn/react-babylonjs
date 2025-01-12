import { useCallback } from 'react'
import type { FilesEntry } from '../../shared/types'
import { useFilesContext } from '../context/Files'
import { useLocalStorageLanguage } from './localStorage'

export const useFiles = () => {
  const { files, updateFiles, activeFile, setActiveFile } = useFilesContext()
  const [language] = useLocalStorageLanguage()

  const currentFiles = files[language]

  const updateCurrentFiles = useCallback(
    (updatedFiles: FilesEntry) => updateFiles({ [language]: updatedFiles }),
    [language, updateFiles]
  )

  return {
    allFiles: files,
    currentFiles,
    updateCurrentFiles,
    activeFile,
    setActiveFile,
    language,
  }
}
