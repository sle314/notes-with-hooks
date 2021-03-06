import styled from 'styled-components'

import { Container as CardContainer } from './Card.styled'

export const Container = styled(CardContainer)`
  font-family: ${({ theme }) => theme.typography.font.secondary};
  background: ${({ theme }) => theme.palette.common.crimson};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 4rem;

  transition: box-shadow 0.5s ease-in-out;

  :hover {
    cursor: pointer;
    box-shadow: ${({ theme }) => theme.boxShadow.hover};
  }
`
