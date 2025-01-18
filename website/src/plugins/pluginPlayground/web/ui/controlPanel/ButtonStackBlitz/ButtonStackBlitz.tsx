import StackBlitzSDK from '@stackblitz/sdk'
import { IconExternalLink } from '@tabler/icons-react'
import { EntryFiles } from '../../../../shared/constants'
import { useFilesContext } from '../../../context/Files'
import { useFiles } from '../../../hooks/useCurrentFiles'
import { useLocalStorageLanguage } from '../../../hooks/useLocalStorageSettings'
import { Button } from '../../components/Button/Button'
import { getCraTemplateFiles } from './templates/cra'
import { getViteTemplateFiles } from './templates/vite'
import { getPackageJson } from './templates/getPackageJson'

export const ButtonStackBlitz = () => {
  const { currentFiles } = useFiles()
  const { dependencies } = useFilesContext()
  const { language } = useLocalStorageLanguage()

  const appFileName = EntryFiles[language]

  const getProjectParams = (templateFiles: Record<string, string>) => {
    return {
      files: {
        ...templateFiles,
        ...currentFiles,
      },
      title: 'react-babylonjs',
    } as const
  }

  const options = {
    newWindow: true,
    openFile: appFileName,
  }

  const PACKAGE_JSON = getPackageJson(dependencies)

  const onClickVite = () => {
    const viteTemplateFiles = {
      ...getViteTemplateFiles({ appFileName }),
      'package.json': JSON.stringify(PACKAGE_JSON, null, 2),
    }

    const params = getProjectParams(viteTemplateFiles)
    StackBlitzSDK.openProject(
      { ...params, template: 'node' },

      options
    )
  }

  const onClickCra = () => {
    const craTemplateFiles = {
      ...getCraTemplateFiles({ appFileName }),
      'package.json': JSON.stringify(PACKAGE_JSON, null, 2),
    }

    const params = getProjectParams(craTemplateFiles)
    StackBlitzSDK.openProject(
      { ...params, template: 'typescript', dependencies: PACKAGE_JSON.dependencies },
      options
    )
  }

  // CRA template didn't work, while Vite template took a while to load - too long compared to sandbox
  return (
    <>
      <Button onClick={onClickVite}>
        <IconExternalLink />
        <span>Stackblitz</span>
      </Button>
      <Button onClick={onClickCra}>
        <IconExternalLink />
        <span>Stackblitz CRA</span>
      </Button>
    </>
  )
}
