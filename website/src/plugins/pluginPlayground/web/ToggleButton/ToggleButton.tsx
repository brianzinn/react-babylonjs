import clsx from 'clsx'
import { RoundedButton } from '@codesandbox/sandpack-react'
import { PanelsLayout } from '../constants'
import styles from './ToggleButton.module.css'

type ToggleButtonProps = {
  value: PanelsLayout
  isActive: boolean
  setLayout: (value: PanelsLayout) => void
}

export const ToggleButton = ({ value, isActive, setLayout }: ToggleButtonProps) => {
  const className = clsx(styles.button, { [styles.isActive]: isActive })

  return (
    <RoundedButton className={className} onClick={() => setLayout(value)}>
      {value}
    </RoundedButton>
  )
}
