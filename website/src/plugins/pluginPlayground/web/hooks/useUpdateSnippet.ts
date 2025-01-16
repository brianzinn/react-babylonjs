import { useDebouncedCallback } from '@mantine/hooks'
import { toMerged } from 'es-toolkit'
import { useSearchParams } from 'rspress/runtime'
import { SearchParams } from '../constants'
import { createSnippet, updateSnippet } from '../db/crud'
import { useFiles } from './useCurrentFiles'
import { useLocalStorageGuid } from './useLocalStorageSettings'
import { db } from '../db/db'
import { PlaygroundProps } from '../../shared/types'
import { useForkSnippet } from './useForkSnippet'

const DEBOUNCE_TIME = 1000

export const useUpdateSnippet = () => {
  const { allFiles, language, activeFile } = useFiles()
  const [searchParams, setSearchParams] = useSearchParams()
  const { authorGuid } = useLocalStorageGuid()

  const updateOrForkSnippet = useUpdateOrForkSnippet()

  return useDebouncedCallback((fileContent: string) => {
    const snippetId = searchParams.get(SearchParams.SnippetId)

    const files = toMerged(allFiles, {
      [language]: {
        [activeFile]: fileContent,
      },
    })

    if (snippetId) {
      updateOrForkSnippet({ snippetId, authorGuid, files })
    } else {
      const newSnippetId = createSnippet({ authorGuid, files })
      setSearchParams({ [SearchParams.SnippetId]: newSnippetId })
    }

    return
  }, DEBOUNCE_TIME)
}

function useUpdateOrForkSnippet() {
  const forkSnippet = useForkSnippet()

  return (params: { snippetId: string; authorGuid: string; files: PlaygroundProps['files'] }) => {
    const { snippetId, authorGuid, files } = params

    const query = {
      files: { $: { where: { snippetId } } },
    }

    db.queryOnce(query).then((response) => {
      const snippet = response.data.files[0]

      if (!snippet) return

      if (snippet.authorGuid === authorGuid) {
        updateSnippet({ snippetId, files })
      } else {
        forkSnippet({ files, authorGuid, forkedFromId: snippetId })
      }
    })
  }
}
