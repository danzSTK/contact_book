import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faInfo,
  faPenToSquare,
  faStar,
  faTrash,
  faUser
} from '@fortawesome/free-solid-svg-icons'

import { Contact, removeContact } from '../../redux/Contact_slice/slice'
import { favoritar, removeFavorito } from '../../redux/Contact_slice/slice'

import { TextPrimary } from '../../styles/styles'

import * as S from './styles'
import { Link } from 'react-router-dom'

type Props = {
  contato: Contact
}

const Contato = ({ contato }: Props) => {
  const dispatch = useDispatch()
  const contatoFavoritado = contato.favorite

  function addFavorite() {
    if (contatoFavoritado) {
      dispatch(removeFavorito(contato))
      return
    }
    dispatch(favoritar(contato))
  }

  function removeContato(c: Contact) {
    dispatch(removeContact(c))
  }

  return (
    <S.ContatosContainer>
      <S.ButtonDrop key={contato.id} favoritoIcon={contato.favorite}>
        <summary>
          <div>
            <FontAwesomeIcon icon={faUser} />
            <span>{contato.name}</span>
            <button onClick={() => addFavorite()} title="Favorito">
              <FontAwesomeIcon icon={faStar} />
            </button>
          </div>
        </summary>

        <S.ContainerInfos>
          <ul>
            <S.Info>
              <TextPrimary>Nome:</TextPrimary>
              <S.TextInfos>{contato.name}</S.TextInfos>
            </S.Info>
            <S.Info>
              <TextPrimary>Número:</TextPrimary>
              <S.TextInfos>{contato.number}</S.TextInfos>
            </S.Info>
            <S.Info>
              <TextPrimary>Email:</TextPrimary>
              <S.TextInfos>{contato.email}</S.TextInfos>
            </S.Info>
          </ul>
          <S.ActionsBar>
            <Link to={`editarContato/${contato.id}`}>
              <button type="button">
                <FontAwesomeIcon icon={faPenToSquare} />
              </button>
            </Link>
            <button type="button" onClick={() => removeContato(contato)}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
            <Link to={`informacao/${contato.id}`}>
              <button type="button">
                <FontAwesomeIcon icon={faInfo} />
              </button>
            </Link>
          </S.ActionsBar>
        </S.ContainerInfos>
      </S.ButtonDrop>
    </S.ContatosContainer>
  )
}

export default Contato
