import { IconGitFork } from '@tabler/icons-react'
import { useState } from 'react'
import { useFiles } from '../../../hooks/useCurrentFiles'
import { useForkSnippet } from '../../../hooks/useForkSnippet'
import { useLocalStorageGuid } from '../../../hooks/useLocalStorageSettings'
import { DualStateButton } from '../../components/DualStateButton/DualStateButton'

const TIME_OUT = 1000

type ButtonForkProps = {
  snippetId: string
}

export const ButtonFork = (props: ButtonForkProps) => {
  const [forked, setForked] = useState(false)
  const [timerId, setTimerId] = useState<number | null>(null)
  const { authorGuid } = useLocalStorageGuid()
  const { allFiles } = useFiles()

  const forkSnippet = useForkSnippet()

  const handleTimeout = () => {
    if (timerId) {
      window.clearTimeout(timerId)
    }

    const id = window.setTimeout(() => {
      setForked(false)
    }, TIME_OUT)

    setTimerId(id)
    setForked(true)
  }

  const onClick = () => {
    handleTimeout()
    forkSnippet({
      authorGuid,
      files: allFiles,
      forkedFromId: props.snippetId,
    })
  }

  return <DualStateButton text="Fork" icon={<IconGitFork />} isAltered={forked} onClick={onClick} />
}
