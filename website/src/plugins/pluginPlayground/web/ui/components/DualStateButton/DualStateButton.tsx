import { IconCheck } from '@tabler/icons-react'
import clsx from 'clsx'
import { Button, ButtonProps } from '../Button/Button'
import styles from './DualStateButton.module.css'

type DualStateButtonProps = ButtonProps & {
  text?: string
  icon: React.ReactElement
  alteredText?: string
  isAltered: boolean
}

export const DualStateButton = (props: DualStateButtonProps) => {
  const { text, icon, alteredText, isAltered, className, ...buttonProps } = props

  const classes = clsx(styles.button, className, {
    [styles.isAltered]: isAltered,
  })

  return (
    <Button title={text} className={classes} {...buttonProps}>
      <span className={styles.normal}>
        {props.icon} <span className={styles.text}>{props.text}</span>
      </span>
      <span className={styles.altered}>
        <IconCheck /> <span className={styles.text}>{props.alteredText ?? props.text}</span>
      </span>
    </Button>
  )
}
