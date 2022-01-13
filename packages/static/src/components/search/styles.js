import { Algolia } from '@styled-icons/fa-brands/Algolia'
import * as React from 'react'

export const PoweredBy = () => (
  <span className="poweredBy">
    Powered by{` `}
    <a href="https://algolia.com">
      <Algolia size="1em" /> Algolia
    </a>
  </span>
)
