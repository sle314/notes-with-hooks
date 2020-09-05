import styled from 'styled-components'

export const Container = styled.div`
  height: calc(100vh - 3.75rem);
  position: fixed;
  top: 1.875rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  background: white;
  box-sizing: border-box;
  padding: 3.75rem;
  max-width: 50rem;
  min-width: 25rem;
  overflow-x: hidden;
  overflow-y: auto;
`

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.25);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`
