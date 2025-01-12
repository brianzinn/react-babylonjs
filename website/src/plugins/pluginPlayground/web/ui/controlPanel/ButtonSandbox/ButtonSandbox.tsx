import { OpenInCodeSandboxButton, SandpackProvider } from '@codesandbox/sandpack-react'
import { useDark } from 'rspress/runtime'
import { Language } from '../../../../shared/constants'
import { useFilesContext } from '../../../context/Files'
import { useLocalStorageLanguage } from '../../../hooks/localStorage'
import { useFiles } from '../../../hooks/useCurrentFiles'

export const ButtonSandbox = () => {
  const theme = useDark() ? 'dark' : 'light'
  const { currentFiles } = useFiles()
  const { dependencies } = useFilesContext()
  const [language] = useLocalStorageLanguage()

  return (
    <SandpackProvider
      theme={theme}
      template={language === Language.tsx ? 'react-ts' : 'react'}
      files={currentFiles}
      customSetup={{
        dependencies,
      }}
    >
      <OpenInCodeSandboxButton />
    </SandpackProvider>
  )
}
