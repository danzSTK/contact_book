import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { TextInfo } from '../../styles/styles'

interface ButtonProps {
  favoritoIcon: boolean
}

export const ContatosContainer = styled.ul`
  display: block;
  width: 100%;
  list-style: none;
  margin-top: 20px;
`

export const ButtonDrop = styled.details<ButtonProps>`
  display: block;
  max-width: 300px;
  width: 100%;
  margin: 0 auto;
  background-color: ${variaveis.cinza};
  margin-bottom: 8px;
  border-radius: 16px;

  summary {
    list-style: none;
    padding: 8px;
    border-radius: 10px;
    background-color: ${variaveis.laranja};
    color: ${variaveis.branco};

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 auto;
      max-width: 90%;
      width: 100%;

      span {
        max-width: 200px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      button {
        background-color: transparent;
        padding: 8px;
        border-radius: 50%;
        color: ${(props) => (props.favoritoIcon ? '#f6b93b' : '#fff')};
        font-size: 16px;
        border: none;
        transition: color, 0.4s linear;
      }
    }
  }
`

export const ContainerInfos = styled.div`
  display: block;
  padding: 8px 16px;
`

export const Info = styled.li`
  display: flex;
  margin-bottom: 8px;
`

export const TextInfos = styled(TextInfo)`
  max-width: 250px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`

export const ActionsBar = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 16px;
  padding: 8px;

  button {
    width: 40px;
    height: 40px;
    border: none;
    outline: none;
    border-radius: 50%;
    color: #fff;
    font-size: 16px;
    background-color: ${variaveis.laranja};
  }
`
