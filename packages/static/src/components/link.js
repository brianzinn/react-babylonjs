import { Link as GatsbyLink } from 'gatsby'
import isAbsoluteUrl from 'is-absolute-url'
import * as React from 'react'

const Link = ({ to, ...props }) =>
  isAbsoluteUrl(to) ? (
    <a href={to} {...props}>
      {props.children}
    </a>
  ) : (
    <GatsbyLink to={to} {...props} />
  )

export default Link
