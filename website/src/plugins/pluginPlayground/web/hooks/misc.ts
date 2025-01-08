import { useMediaQuery } from '@mantine/hooks'

export const useIsVertical = () => {
  return useMediaQuery('(max-width: 650px)')
}
