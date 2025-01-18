import { useSearchParams } from 'rspress/runtime'
import { PlaygroundProps } from '../../shared/types'
import { SearchParams } from '../constants'
import { createSnippet } from '../db/crud'

export function useCreateSnippet() {
  const [, setSearchParams] = useSearchParams()

  return (params: { files: PlaygroundProps['files']; forkedFromId?: string | null }) => {
    const { files, forkedFromId } = params

    const newSnippetId = createSnippet({ files })

    const searchParams: Record<string, string> = {
      [SearchParams.SnippetId]: newSnippetId,
    }

    if (forkedFromId) {
      searchParams[SearchParams.ForkedFromId] = forkedFromId
    }

    setSearchParams(searchParams)
  }
}
