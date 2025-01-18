import { SandpackProvider, UnstyledOpenInCodeSandboxButton } from '@codesandbox/sandpack-react'
import { IconExternalLink } from '@tabler/icons-react'
import clsx from 'clsx'
import { useDark } from 'rspress/runtime'
import { Language } from '../../../../shared/constants'
import { useFilesContext } from '../../../context/Files'
import { useFiles } from '../../../hooks/useCurrentFiles'
import { useLocalStorageLanguage } from '../../../hooks/useLocalStorageSettings'
import baseButtonStyles from '../../components/Button/Button.module.css'
import styles from './ButtonSandbox.module.css'

export const ButtonSandbox = () => {
  const theme = useDark() ? 'dark' : 'light'
  const { currentFiles } = useFiles()
  const { dependencies } = useFilesContext()
  const { language } = useLocalStorageLanguage()

  const classes = clsx(styles.button, baseButtonStyles.button)

  return (
    <SandpackProvider
      theme={theme}
      files={currentFiles}
      customSetup={{ dependencies }}
      template={language === Language.tsx ? 'react-ts' : 'react'}
    >
      <UnstyledOpenInCodeSandboxButton className={classes}>
        <IconExternalLink />
        <span>CodeSandbox</span>
      </UnstyledOpenInCodeSandboxButton>
    </SandpackProvider>
  )
}
