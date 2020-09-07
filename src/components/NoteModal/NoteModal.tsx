import React from 'react'

import { Path } from '../../enums'
import { Back, Delete, Edit, Save } from '../icons'
import Markdown from '../Markdown'
import Modal from '../Modal'
import { useNoteModal } from './use-note-modal'

import {
  ActionContainer,
  BackContainer,
  Buttons,
  Container,
  Content,
  IconButton,
  IconLink,
  Textarea,
} from './NoteModal.styled'

interface Props {
  noteId?: number
  isEdit?: boolean
}

export const NoteModal: React.FC<Props> = ({ noteId, isEdit = false }) => {
  const {
    isShown,
    modalRef,
    note,
    onDeleteClick,
    onOverlayClick,
    onSaveClick,
    onTextareaChange,
    source,
    textareaRef,
  } = useNoteModal(isEdit, noteId)

  return (
    <Modal onOverlayClick={onOverlayClick} isShown={isShown} ref={modalRef}>
      {note && (
        <Container>
          <Buttons>
            <BackContainer>
              <IconLink to={Path.Notes} isLast>
                <Back/>
              </IconLink>
            </BackContainer>
            <ActionContainer>
              {!isEdit && (
                <IconLink to={`${Path.Notes}${note.id}/edit/`}>
                  <Edit/>
                </IconLink>
              )}
              {isEdit && (
                <IconButton onClick={onSaveClick}>
                  <Save/>
                </IconButton>
              )}
              <IconButton onClick={onDeleteClick} isLast>
                <Delete/>
              </IconButton>
            </ActionContainer>
          </Buttons>
          <Content>
            {!isEdit && <Markdown>{source}</Markdown>}
            {isEdit && <Textarea ref={textareaRef} value={source} onChange={onTextareaChange}/>}
          </Content>
        </Container>
      )}
    </Modal>
  )
}
