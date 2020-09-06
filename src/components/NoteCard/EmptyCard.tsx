import React, { useCallback } from 'react'

import { Container } from './EmptyCard.styled'

interface Props {
  onClick?: () => void
}

export const EmptyCard: React.FC<Props> = ({ onClick: onClickProp }) => {
  const onClick = useCallback(() => {
    if (onClickProp) {
      onClickProp()
    }
  }, [onClickProp])
  return (
    <Container tabIndex={0} onClick={onClick}>+</Container>
  )
}
