import React from 'react'

import { Container } from './EmptyCard.styled'

export const EmptyCard: React.SFC = () => {
  return (
    <Container tabIndex={0}>+</Container>
  )
}
