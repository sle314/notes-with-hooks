import React, { useCallback, useEffect, forwardRef, PropsWithChildren, useRef } from 'react'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { navigate } from '@reach/router'

import { Path } from '../../enums'
import { Container, Overlay, Wrapper } from './Modal.styled'

interface Props {
  onOverlayClick?: () => void
  isShown: boolean
}

export const Modal = forwardRef<HTMLDivElement, PropsWithChildren<Props>>(({
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
      navigate(Path.Notes).catch(() => undefined)
    }
  }, [isShown])

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown)

    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onKeyDown])

  const modalRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!modalRef.current) {
      return
    }
    const currentRef = modalRef.current
    disableBodyScroll(currentRef)

    return () => {
      enableBodyScroll(currentRef)
    }
  }, [])

  return (
    <Wrapper isShown={isShown} ref={modalRef}>
      <Overlay onClick={onOverlayClick}/>
      <Container role='dialog' tabIndex={0} ref={ref}>{children}</Container>
    </Wrapper>
  )
})
