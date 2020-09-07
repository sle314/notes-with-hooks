import styled from 'styled-components'

export const Container = styled.article`
  width: 100%;
  height: 100%;
  padding: 1.25rem;
  color: black;
  background: ${({ theme }) => theme.palette.common.lightGrey};
  border: 3px solid transparent;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow.normal};
  transition: border-color 0.5s ease-in-out;
  font-size: 4rem;
  box-sizing: border-box;
  overflow: hidden;

  :hover {
    border: 3px solid ${({ theme }) => theme.palette.common.crimson};
  }
`
