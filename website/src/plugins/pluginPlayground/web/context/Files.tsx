import { toMerged } from 'es-toolkit'
import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { EntryFiles } from '../../shared/constants'
import type { PlaygroundProps } from '../../shared/types'
import { useLocalStorageLanguage } from '../hooks/useLocalStorageSettings'

type Files = PlaygroundProps['files']

type FilesContextValue = {
  files: Files
  setFiles: React.Dispatch<React.SetStateAction<Files>>
  updateFiles: (update: Partial<Files>) => void

  lastSavedFiles: Files
  setLastSavedFiles: React.Dispatch<React.SetStateAction<Files>>

  initialFiles: Files
  setInitialFiles: () => void

  activeFile: string
  setActiveFile: React.Dispatch<React.SetStateAction<string>>

  dependencies: PlaygroundProps['dependencies']
}

const FilesContext = createContext<FilesContextValue | undefined>(undefined)

type FilesProviderProps = {
  children: React.ReactNode
  initialValue: PlaygroundProps
}

function FilesProvider({ initialValue, children }: FilesProviderProps) {
  const [files, setFiles] = useState(initialValue.files)
  const [lastSavedFiles, setLastSavedFiles] = useState(initialValue.files)

  const updateFiles = useCallback((update: Partial<Files>) => {
    setFiles((prevFiles) => toMerged(prevFiles, update))
  }, [])

  const setInitialFiles = useCallback(() => {
    setFiles(initialValue.files)
  }, [initialValue.files])

  const { language } = useLocalStorageLanguage()
  const [activeFile, setActiveFile] = useState(EntryFiles[language])

  useEffect(() => {
    const fileNames = Object.keys(initialValue.files[language])
    const [activeFileNameBase] = activeFile.split('.')
    const nextActiveFile = fileNames.find((fileName) => fileName.includes(activeFileNameBase))

    setActiveFile(nextActiveFile ?? EntryFiles[language])
  }, [language, activeFile, initialValue.files])

  return (
    <FilesContext.Provider
      value={{
        files,
        setFiles,
        updateFiles,

        lastSavedFiles,
        setLastSavedFiles,

        initialFiles: initialValue.files,
        setInitialFiles,

        activeFile,
        setActiveFile,

        dependencies: initialValue.dependencies,
      }}
    >
      {children}
    </FilesContext.Provider>
  )
}

const useFilesContext = () => {
  const context = useContext(FilesContext)

  if (context === undefined) {
    throw new Error('useFilesContext must be used within a FilesProvider')
  }

  return context
}

export { FilesProvider, useFilesContext }
