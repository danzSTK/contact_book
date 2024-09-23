import { FormEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

import { Contact, setContact } from '../../redux/Contact_slice/slice'

import Titulo from '../../components/Title'
import {
  ActionBarForm,
  ButtonForm,
  ContainerForm,
  InputContainer,
  LabelContainer,
  LabelText
} from './styles'

const Formulario = () => {
  const navigete = useNavigate()
  const dispatch = useDispatch()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')

  const newContato: Contact = {
    name: nome,
    email: email,
    number: Number(number),
    favorite: false,
    id: 0
  }
  function adicionarContato(event: FormEvent) {
    event.preventDefault()
    dispatch(setContact(newContato))
    navigete('/')
  }

  return (
    <>
      <Titulo center={true}>Add new contact</Titulo>
      <form onSubmit={(event) => adicionarContato(event)}>
        <ContainerForm>
          <LabelContainer>
            <LabelText htmlFor="name">Nome:</LabelText>
            <InputContainer>
              <FontAwesomeIcon icon={faUser} />
              <input
                id="name"
                type="text"
                placeholder="Nome do seu contato..."
                onChange={(event) => setNome(event.target.value)}
                required
              />
            </InputContainer>
          </LabelContainer>
          <LabelContainer>
            <LabelText htmlFor="email">Email:</LabelText>
            <InputContainer>
              <FontAwesomeIcon icon={faEnvelope} />
              <input
                id="email"
                type="text"
                placeholder="Email do seu contato..."
                onChange={(event) => setEmail(event.target.value)}
              />
            </InputContainer>
          </LabelContainer>
          <LabelContainer>
            <LabelText htmlFor="numero">Número:</LabelText>
            <InputContainer>
              <FontAwesomeIcon icon={faPhone} />
              <input
                id="numero"
                type="number"
                placeholder="Número do contato..."
                onChange={(event) => setNumber(event.target.value)}
                required
              />
            </InputContainer>
          </LabelContainer>
        </ContainerForm>
        <ActionBarForm>
          <ButtonForm $buttontypestyle="normal" type="submit">
            Salvar
          </ButtonForm>
          <Link to="/">
            <ButtonForm $buttontypestyle="range" type="button">
              Cancelar
            </ButtonForm>
          </Link>
        </ActionBarForm>
      </form>
    </>
  )
}

export default Formulario
