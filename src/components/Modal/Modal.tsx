import React, { useCallback, useEffect, forwardRef, PropsWithChildren } from 'react'
import { navigate } from '@reach/router'

import { Path } from '../../enums'
import { Container, Overlay, Wrapper } from './Modal.styled'

interface Props {
  onOverlayClick?: () => void
  isShown: boolean
}

export const Modal = forwardRef<HTMLDivElement,  PropsWithChildren<Props>>(({
  children,
  onOverlayClick: onOverlayClickProp,
  isShown = false,
}, ref) => {
  const onOverlayClick = useCallback(() => {
    if (onOverlayClickProp) {
      onOverlayClickProp()
    }
  }, [onOverlayClickProp])

  const onKeyDown = useCallback((event: KeyboardEvent) => {
    if (isShown && event.key.toLowerCase() === 'escape') {
      void navigate(Path.Notes)
    }
  }, [isShown])

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown)

    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onKeyDown])

  return (
    <Wrapper isShown={isShown}>
      <Overlay onClick={onOverlayClick}/>
      <Container role='dialog' tabIndex={0} ref={ref}>{children}</Container>
    </Wrapper>
  )
})
