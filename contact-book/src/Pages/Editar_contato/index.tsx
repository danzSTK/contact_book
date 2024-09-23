import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Titulo from '../../components/Title'
import * as S from '../../containers/Formulario/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'
import { FormEvent, useState } from 'react'
import { Contact, editarContato } from '../../redux/Contact_slice/slice'

const Editar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const contatos = useSelector(
    (state: RootState) => state.contatos.contatosList
  )
  const { id } = useParams()
  const contato = contatos.find((item) => item.id == id)

  const [nome, setNome] = useState(contato?.name)
  const [email, setEmail] = useState(contato?.email)
  const [numero, setNumero] = useState(contato?.number)

  function editar(e: FormEvent) {
    e.preventDefault()
    const newContato: Contact = {
      name: String(nome),
      email: String(email),
      favorite: Boolean(contato?.favorite),
      number: Number(numero),
      id: contato?.id
    }

    dispatch(editarContato(newContato))
    navigate('/')
  }

  return (
    <>
      <Titulo center={true}>Editando contato...</Titulo>
      <form onSubmit={(evento) => editar(evento)}>
        <S.ContainerForm>
          <S.LabelContainer>
            <S.LabelText htmlFor="name">Nome:</S.LabelText>
            <S.InputContainer>
              <FontAwesomeIcon icon={faUser} />
              <input
                id="name"
                type="text"
                placeholder="Nome do seu contato..."
                value={nome}
                onChange={({ target }) => setNome(target.value)}
                required
              />
            </S.InputContainer>
          </S.LabelContainer>
          <S.LabelContainer>
            <S.LabelText htmlFor="email">Email:</S.LabelText>
            <S.InputContainer>
              <FontAwesomeIcon icon={faEnvelope} />
              <input
                id="email"
                type="text"
                placeholder="Email do seu contato..."
                value={email}
                onChange={({ target }) => setEmail(target.value)}
              />
            </S.InputContainer>
          </S.LabelContainer>
          <S.LabelContainer>
            <S.LabelText htmlFor="numero">Número:</S.LabelText>
            <S.InputContainer>
              <FontAwesomeIcon icon={faPhone} />
              <input
                id="numero"
                type="number"
                placeholder="Número do contato..."
                value={numero}
                onChange={({ target }) => setNumero(Number(target))}
                required
              />
            </S.InputContainer>
          </S.LabelContainer>
        </S.ContainerForm>
        <S.ActionBarForm>
          <S.ButtonForm $buttontypestyle="normal" type="submit">
            Salvar
          </S.ButtonForm>
          <Link to="/">
            <S.ButtonForm $buttontypestyle="range" type="button">
              Cancelar
            </S.ButtonForm>
          </Link>
        </S.ActionBarForm>
      </form>
    </>
  )
}

export default Editar
