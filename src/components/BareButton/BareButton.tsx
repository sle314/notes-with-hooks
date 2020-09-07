import React, { ButtonHTMLAttributes } from 'react'

import { StyledButton } from './BareButton.styled'

export const BareButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = props => (
  <StyledButton {...props}/>
)
