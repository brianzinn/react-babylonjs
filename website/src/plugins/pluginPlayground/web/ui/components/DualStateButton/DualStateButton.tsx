import { IconCheck } from '@tabler/icons-react'
import clsx from 'clsx'
import { Button } from '../Button/Button'
import styles from './DualStateButton.module.css'

type DualStateButtonProps = {
  text?: string
  icon: React.ReactElement
  alteredText?: string
  isAltered: boolean
  onClick: () => void
}

export const DualStateButton = (props: DualStateButtonProps) => {
  const classes = clsx(styles.button, {
    [styles.isAltered]: props.isAltered,
  })

  return (
    <Button title={props.text} onClick={props.onClick} className={classes}>
      <span className={styles.normal}>
        {props.icon} <span className={styles.text}>{props.text}</span>
      </span>
      <span className={styles.altered}>
        <IconCheck /> <span className={styles.text}>{props.alteredText ?? props.text}</span>
      </span>
    </Button>
  )
}
