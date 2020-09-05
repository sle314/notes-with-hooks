import React, { useCallback } from 'react'

import Modal from '../Modal'
import { navigate } from '@reach/router'

import { Path } from '../../enums'
import { Back, Delete, Edit, Save } from '../icons'

import { Container } from './NoteModal.styled'

interface Props {
  isEdit?: boolean
}

export const NoteModal: React.SFC<Props> = ({ isEdit = false }) => {
  const onOverlayClick = useCallback(async () => {
    await navigate(Path.Notes)
  }, [])

  return (
    <Modal onOverlayClick={onOverlayClick}>
      <Container>
        <Back/>
        <Delete/>
        <Edit/>
        <Save/>
      </Container>
    </Modal>
  )
}
