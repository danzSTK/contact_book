import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { ButtonIcon, TextInfo } from '../../styles/styles'

export const ContactInfosContainer = styled.section`
  margin: 24px 0;
  padding: 8px 0;
  border-top: 1px solid #ccc;
`
export const ListInfosContact = styled.li`
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 12px 0;

  svg {
    color: ${variaveis.laranja};
    margin-right: 8px;
  }

  label {
    color: ${variaveis.laranja};
  }
`
export const FluterButton = styled(ButtonIcon)`
  position: absolute;
  top: 25px;
  left: 20px;
  background-color: transparent;
`

export const TextInfoBreak = styled(TextInfo)`
  text-align: start;
  max-height: 4.5rem;
  line-height: 1.5rem;
  text-overflow: ellipsis;
  overflow-y: hidden;
  word-wrap: break-word;
  overflow-wrap: break-word;
`
