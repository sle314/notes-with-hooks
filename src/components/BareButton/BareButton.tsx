import React, { ButtonHTMLAttributes } from 'react'

import { StyledButton } from './BareButton.styled'

export const BareButton: React.SFC<ButtonHTMLAttributes<HTMLButtonElement>> = props => (
  <StyledButton {...props}/>
)
