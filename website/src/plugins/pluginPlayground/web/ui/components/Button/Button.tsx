import clsx from 'clsx'
import styles from './Button.module.css'

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  text?: string
  icon?: React.ReactElement
}

export const Button = ({ icon, text, children, className = '', ...restProps }: ButtonProps) => {
  const classes = clsx(className, {
    [styles.button]: true,
  })

  return (
    <button className={classes} {...restProps}>
      {icon} {text && <span className={styles.text}>{text}</span>}
      {children}
    </button>
  )
}
