import styled from 'styled-components'

import { Container as NoteCardContainer } from './NoteCard.styled'

export const Container = styled(NoteCardContainer)`
  background: #B90445;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 4rem;

  transition: box-shadow 0.5s ease-in-out;

  :hover {
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.6);
  }
`
