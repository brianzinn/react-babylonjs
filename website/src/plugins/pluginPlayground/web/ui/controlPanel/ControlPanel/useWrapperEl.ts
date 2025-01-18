import { useElementSize } from '@mantine/hooks'
import { useIsPlaygroundPage, useSnippetId } from '../../../hooks/location'

export const useWrapperEl = () => {
  const element = useElementSize()
  const isPlaygroundPage = useIsPlaygroundPage()
  const snippetId = useSnippetId()

  const NARROW_THRESHOLD = isPlaygroundPage && snippetId ? 850 : 650
  const isTight = element.width < NARROW_THRESHOLD

  return { isTight, ref: element.ref }
}
