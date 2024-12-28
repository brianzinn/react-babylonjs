import './ActionIcon.css'
import React from 'react'
import { RoundedButton } from '@codesandbox/sandpack-react'

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export const ActionIcon = ({ children, ...props }: ButtonProps) => {
  return (
    <RoundedButton className="actionIcon" {...props}>
      {children}
    </RoundedButton>
  )
}
