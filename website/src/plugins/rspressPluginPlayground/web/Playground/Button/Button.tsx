import './Button.css'
import React from 'react'
import { RoundedButton } from '@codesandbox/sandpack-react'

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <RoundedButton className="button" {...props}>
      {children}
    </RoundedButton>
  )
}
