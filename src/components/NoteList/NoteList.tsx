import React from 'react'

import { DEFAULT_CONTENT } from '../../constants'
import { Path } from '../../enums'
import BareLink from '../BareLink'
import NoteCard, { EmptyCard } from '../NoteCard'

import { Container } from './NoteList.styled'

export const NoteList: React.SFC = () => (
  <Container>
    <EmptyCard/>
    <BareLink to={`${Path.Notes}${1}/`}>
      <NoteCard markdownContent={DEFAULT_CONTENT}/>
    </BareLink>
  </Container>
)
