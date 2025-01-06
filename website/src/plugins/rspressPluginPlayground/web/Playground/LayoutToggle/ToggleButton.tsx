import { Button } from '../Button/Button'
import { PanelsLayout } from '../Playground/Playground'
import styles from './ToggleButton.module.css'

type ToggleButtonProps = {
  value: PanelsLayout
  isActive: boolean
  setLayout: (value: PanelsLayout) => void
}

export const ToggleButton = ({ value, isActive, setLayout }: ToggleButtonProps) => {
  const className = isActive ? styles.isActive : ''

  return (
    <Button className={className} onClick={() => setLayout(value)}>
      {value}
    </Button>
  )
}
