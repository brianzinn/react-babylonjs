import { Button } from '../Button/Button'
import styles from './ToggleButtonGroup.module.css'

type ToggleButtonGroupProps<T> = {
  values: { value: T; label: React.ReactNode }[]
  activeValue: T
  setValue: (value: T) => void
}

export const ToggleButtonGroup = <T extends string>(props: ToggleButtonGroupProps<T>) => {
  const { values, setValue, activeValue } = props

  return (
    <div className={styles.wrapper}>
      {values.map((entry) => {
        const label = typeof entry === 'object' ? entry.label : entry
        const value = typeof entry === 'object' ? entry.value : entry

        return (
          <Button
            key={value}
            title={typeof label === 'string' ? label : value}
            className={styles.button}
            data-active={value === activeValue}
            onClick={() => setValue(value)}
          >
            {label}
          </Button>
        )
      })}
    </div>
  )
}
