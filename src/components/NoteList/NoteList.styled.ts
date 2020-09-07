import styled from 'styled-components'

import { NOTE_CARD_SIZE } from '../../constants'

export const Container = styled.section`
  display: grid;
  grid-gap: 3.75rem;
  grid-template-columns: repeat(auto-fill, ${NOTE_CARD_SIZE});
  grid-template-rows: repeat(auto-fill, minmax(${NOTE_CARD_SIZE}, auto));
  padding: 6.25rem;
  justify-content: center;
`
