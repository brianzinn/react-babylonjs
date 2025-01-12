import { IconFile } from '@tabler/icons-react'
import { useSearchParams } from 'rspress/runtime'
import { SearchParams } from '../../../constants'
import { useFilesContext } from '../../../context/Files'
import { useSnippetId } from '../../../hooks/location'
import { Button } from '../../components/Button/Button'

export const ButtonCreateNew = () => {
  const snippetId = useSnippetId()
  const [searchParams, setSearchParams] = useSearchParams()

  const { setInitialFiles } = useFilesContext()

  const onClick = () => {
    const confirmed = confirm('Are you sure you want to create a new playground?')

    if (confirmed) {
      const params = searchParams

      params.delete(SearchParams.SnippetId)
      params.delete(SearchParams.ForkedFromId)

      setSearchParams(params)
      setInitialFiles()
    }
  }

  return snippetId && <Button icon={<IconFile />} text="New" title="Create new" onClick={onClick} />
}
