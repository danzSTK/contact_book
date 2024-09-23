import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Titulo from '../Title'
import { Container, ContainerButtons, ContainerHeader } from './styles'
import { ButtonIcon } from '../../styles/styles'
import {
  faEllipsisVertical,
  faMagnifyingGlass
} from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <ContainerHeader>
      <Container>
        <Titulo>Contatos</Titulo>
        <ContainerButtons>
          <ButtonIcon>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </ButtonIcon>
          <ButtonIcon>
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </ButtonIcon>
        </ContainerButtons>
      </Container>
    </ContainerHeader>
  )
}

export default Header
