import styled from 'styled-components'

export const Wrapper = styled.div<{ isShown: boolean }>`
  display: ${({ isShown }) => isShown ? 'block' : 'none'};
`

export const Container = styled.div`
  height: calc(100vh - 3.75rem);
  position: fixed;
  top: 1.875rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  background: ${({ theme }) => theme.palette.common.white};
  box-sizing: border-box;
  padding: 3.75rem;
  max-width: 50rem;
  min-width: 25rem;
  overflow-x: hidden;
  overflow-y: auto;

  :focus {
    outline: none;
  }
`

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.palette.overlay};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`
