import { useSearchParams } from 'rspress/runtime'
import { PlaygroundProps } from '../../shared/types'
import { SearchParams } from '../constants'
import { createSnippet } from '../db/crud'

export function useForkSnippet() {
  const [, setSearchParams] = useSearchParams()

  return (params: {
    forkedFromId: string
    authorGuid: string
    files: PlaygroundProps['files']
  }) => {
    const { forkedFromId, authorGuid, files } = params

    const newSnippetId = createSnippet({
      files,
      authorGuid,
      forkedFromId,
    })

    setSearchParams({
      [SearchParams.SnippetId]: newSnippetId,
      [SearchParams.ForkedFromId]: forkedFromId,
    })
  }
}
