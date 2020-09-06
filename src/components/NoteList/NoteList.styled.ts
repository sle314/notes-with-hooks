import styled from 'styled-components'

import BareLink from '../BareLink'

const size = '12.5rem'

export const Container = styled.section`
  display: grid;
  grid-gap: 3.75rem;
  grid-template-columns: repeat(auto-fill, ${size});
  grid-template-rows: repeat(auto-fill, minmax(${size}, auto));
  padding: 6.25rem;
`

export const NoteCardWrapper = styled(BareLink)`
  height: ${size};
`
