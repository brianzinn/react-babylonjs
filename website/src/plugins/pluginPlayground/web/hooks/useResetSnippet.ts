import { useSearchParams } from 'rspress/runtime'
import { SearchParams } from '../constants'
import { useFilesContext } from '../context/Files'

export const useResetSnippet = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const { setInitialFiles } = useFilesContext()

  return () => {
    const params = searchParams

    params.delete(SearchParams.SnippetId)
    params.delete(SearchParams.ForkedFromId)

    setSearchParams(params)
    setInitialFiles()
  }
}
