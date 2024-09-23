import { useSelector } from 'react-redux'
import { RootState } from '../../redux'
import { Link, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faPhone,
  faUser,
  faEnvelope,
  faArrowLeft
} from '@fortawesome/free-solid-svg-icons'

import Titulo from '../../components/Title'
import { TextPrimary } from '../../styles/styles'
import {
  ContactInfosContainer,
  ListInfosContact,
  FluterButton,
  TextInfoBreak
} from './styles'

const ContatoInfo = () => {
  const contatos = useSelector(
    (state: RootState) => state.contatos.contatosList
  )
  const { id } = useParams()
  const contato = contatos.find((item) => item.id == id)

  return (
    <>
      <Link to={'/'}>
        <FluterButton>
          <FontAwesomeIcon icon={faArrowLeft} />
        </FluterButton>
      </Link>
      <header>
        <Titulo>Informações do contato</Titulo>
      </header>
      <ContactInfosContainer>
        <article>
          <ul>
            <ListInfosContact>
              <FontAwesomeIcon icon={faUser} />
              <TextPrimary as="label">Nome:</TextPrimary>
              <TextInfoBreak>{contato?.name}</TextInfoBreak>
            </ListInfosContact>
            <ListInfosContact>
              <FontAwesomeIcon icon={faEnvelope} />
              <TextPrimary as="label">Email:</TextPrimary>
              <TextInfoBreak>{contato?.email}</TextInfoBreak>
            </ListInfosContact>
            <ListInfosContact>
              <FontAwesomeIcon icon={faPhone} />
              <TextPrimary as="label">Número:</TextPrimary>
              <TextInfoBreak>{contato?.number}</TextInfoBreak>
            </ListInfosContact>
          </ul>
        </article>
      </ContactInfosContainer>
    </>
  )
}

export default ContatoInfo
