import { IconFile } from '@tabler/icons-react'
import { useSnippetId } from '../../../hooks/location'
import { Button } from '../../components/Button/Button'
import { useResetSnippet } from '../../../hooks/useResetSnippet'

export const ButtonCreateNew = () => {
  const snippetId = useSnippetId()
  const handleReset = useResetSnippet()

  const onClick = () => {
    const confirmed = confirm('Are you sure you want to create a new playground?')

    if (confirmed) {
      handleReset()
    }
  }

  return snippetId && <Button icon={<IconFile />} text="New" title="Create new" onClick={onClick} />
}
