import styled from 'styled-components'
import { ButtonIcon } from '../../styles/styles'
import variaveis from '../../styles/variaveis'
import { Titulo } from '../../components/Title/styles'

export const ContainerPlusContact = styled.div`
  position: fixed;
  right: 24px;
  bottom: 48px;
`
export const ButtonPlusContact = styled(ButtonIcon)`
  width: 64px;
  height: 64px;
  font-size: 24px;
  background-color: ${variaveis.laranja};
`

export const TitleSection = styled(Titulo)`
  margin: 8px 0;
`
