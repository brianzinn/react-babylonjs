import StackBlitzSDK from '@stackblitz/sdk'
import { IconExternalLink } from '@tabler/icons-react'
import { EntryFiles } from '../../../../shared/constants'
import { useFilesContext } from '../../../context/Files'
import { useFiles } from '../../../hooks/useCurrentFiles'
import { useLocalStorageLanguage } from '../../../hooks/useLocalStorageSettings'
import { Button } from '../../components/Button/Button'
import { getCraTemplateFiles } from './templates/cra'

export const ButtonStackBlitz = () => {
  const { currentFiles } = useFiles()
  const { dependencies } = useFilesContext()
  const { language } = useLocalStorageLanguage()

  const appFileName = EntryFiles[language]
  const templateFiles = getCraTemplateFiles({ appFileName })

  const onClick = () => {
    StackBlitzSDK.openProject(
      {
        files: {
          ...templateFiles,
          ...currentFiles,
        },
        title: 'react-babylonjs',
        template: 'node',
      },
      {
        newWindow: true,
        openFile: appFileName,
      }
    )
  }

  return (
    <Button onClick={onClick}>
      <IconExternalLink />
      <span>Stackblitz</span>
    </Button>
  )
}
