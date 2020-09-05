import React, { useCallback } from 'react'

import { Container, Overlay } from './Modal.styled'

interface Props {
  onOverlayClick?: () => void
}

export const Modal: React.SFC<Props> = ({ children, onOverlayClick: onOverlayClickProp }) => {
  const onOverlayClick = useCallback(() => {
    if (onOverlayClickProp) {
      onOverlayClickProp()
    }
  }, [onOverlayClickProp])

  return (
    <>
      <Overlay onClick={onOverlayClick}/>
      <Container>{children}</Container>
    </>
  )
}
