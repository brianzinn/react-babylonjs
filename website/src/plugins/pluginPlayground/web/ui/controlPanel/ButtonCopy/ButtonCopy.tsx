import { useClipboard } from '@mantine/hooks'
import { IconCopy } from '@tabler/icons-react'
import { DualStateButton } from '../../components/DualStateButton/DualStateButton'

export const ButtonCopy = () => {
  const clipboard = useClipboard({ timeout: 1000 })

  const onClick = () => {
    console.log(window.location.href)
    clipboard.copy(window.location.href)
  }

  return (
    <DualStateButton
      text="Copy link"
      icon={<IconCopy />}
      alteredText="Copied!"
      isAltered={clipboard.copied}
      onClick={onClick}
    />
  )
}
