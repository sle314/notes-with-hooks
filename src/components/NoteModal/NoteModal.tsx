import React from 'react'
import { TouchScrollable } from 'react-scrolllock'

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

  return note ? (
    <Modal onOverlayClick={onOverlayClick} isShown={isShown} ref={modalRef}>
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
          {!isEdit && (
            <TouchScrollable>
              <Markdown>{source}</Markdown>
            </TouchScrollable>
          )}
          {isEdit && (
            <TouchScrollable>
              <Textarea ref={textareaRef} value={source} onChange={onTextareaChange}/>
            </TouchScrollable>
          )}
        </Content>
      </Container>
    </Modal>
  ) : null
}
