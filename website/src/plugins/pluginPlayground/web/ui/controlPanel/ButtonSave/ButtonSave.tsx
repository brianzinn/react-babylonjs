import { IconDeviceFloppy } from '@tabler/icons-react'
import { useEffect } from 'react'
import { useFilesContext } from '../../../context/Files'
import { useCreateSnippet } from '../../../hooks/useCreateSnippet'
import styles from './ButtonSave.module.css'
import { Button } from '../../components/Button/Button'

export const ButtonSave = ({ forkedFromId }: { forkedFromId: string | null }) => {
  const { files, lastSavedFiles, setLastSavedFiles } = useFilesContext()
  const createSnippet = useCreateSnippet()

  const hasChanges = JSON.stringify(files) !== JSON.stringify(lastSavedFiles)

  const onClick = () => {
    createSnippet({ files, forkedFromId })
    setLastSavedFiles(files)
  }

  useEffect(() => {
    const beforeUnloadHandler = (event: BeforeUnloadEvent) => {
      if (hasChanges) {
        event.preventDefault()
      }
    }

    window.addEventListener('beforeunload', beforeUnloadHandler)

    return () => {
      window.removeEventListener('beforeunload', beforeUnloadHandler)
    }
  }, [hasChanges])

  return (
    <Button
      text="Save"
      disabled={!hasChanges}
      icon={<IconDeviceFloppy />}
      onClick={onClick}
      className={hasChanges ? styles.hasChanges : undefined}
    />
  )
}
