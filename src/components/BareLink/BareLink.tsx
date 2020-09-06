import React from 'react'
import { LinkProps } from '@reach/router'

import { StyledLink } from './BareLink.styled'

type Props = (
  React.PropsWithoutRef<LinkProps<Record<string, unknown>>> &
  React.RefAttributes<HTMLAnchorElement>
)

export const BareLink: React.FC<Props> = props => (
  <StyledLink {...props}/>
)
