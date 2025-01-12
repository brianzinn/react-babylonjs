import { useLocation, useSearchParams } from 'rspress/runtime'
import { SearchParams } from '../constants'

export const useSnippetId = () => {
  const [searchParams] = useSearchParams()

  return searchParams.get(SearchParams.SnippetId)
}

export const useIsPlaygroundPage = () => {
  const { pathname } = useLocation()

  return pathname.includes('/playground')
}
