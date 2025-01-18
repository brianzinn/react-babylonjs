import { useDebouncedCallback } from '@mantine/hooks'
import { toMerged } from 'es-toolkit'
import { useSearchParams } from 'rspress/runtime'
import { SearchParams } from '../constants'
import { updateSnippet } from '../db/crud'
import { useFiles } from './useCurrentFiles'
import { db } from '../db/db'
import { PlaygroundProps } from '../../shared/types'
import { useForkSnippet } from './useForkSnippet'
import { useCreateSnippet } from './useCreateSnippet'

const DEBOUNCE_TIME = 1000

export const useUpdateSnippet = () => {
  const { allFiles, language, activeFile } = useFiles()
  const [searchParams] = useSearchParams()

  const createSnippet = useCreateSnippet()
  const updateOrForkSnippet = useUpdateOrForkSnippet()

  return useDebouncedCallback((fileContent: string) => {
    const snippetId = searchParams.get(SearchParams.SnippetId)

    const files = toMerged(allFiles, {
      [language]: {
        [activeFile]: fileContent,
      },
    })

    if (snippetId) {
      updateOrForkSnippet({ snippetId, files })
    } else {
      createSnippet({ files })
    }

    return
  }, DEBOUNCE_TIME)
}

function useUpdateOrForkSnippet() {
  const forkSnippet = useForkSnippet()

  return (params: { snippetId: string; files: PlaygroundProps['files'] }) => {
    const { snippetId, files } = params

    const query = {
      files: { $: { where: { snippetId } } },
    }

    db.queryOnce(query).then((response) => {
      const snippet = response.data.files[0]

      if (!snippet) return

      // TODO: review later
      if (false /* snippet.authorGuid === authorGuid */) {
        updateSnippet({ snippetId, files })
      } else {
        forkSnippet({ files, forkedFromId: snippetId })
      }
    })
  }
}
