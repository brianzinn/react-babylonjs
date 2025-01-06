import React from 'react'
import { RoundedButton } from '@codesandbox/sandpack-react'
import styles from './Button.module.css'
import clsx from 'clsx'

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <RoundedButton className={clsx(styles.button, className)} {...props}>
      {children}
    </RoundedButton>
  )
}
