import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
interface Props {
  $buttontypestyle: 'normal' | 'range'
}

export const ContainerForm = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`
export const LabelContainer = styled.li`
  flex: 1;
  list-style: none;
`

export const LabelText = styled.label`
  color: ${variaveis.laranja};
  font-size: 14px;
  font-weight: 600;
`
export const InputContainer = styled.div`
  position: relative;
  margin-top: 8px;

  svg {
    position: absolute;
    top: 50%;
    left: 10px;
    color: ${variaveis.cinzaBlack};
    transform: translateY(-50%);
  }

  input {
    display: block;
    width: 100%;
    padding: 12px 0;
    padding-left: 32px;
    padding-right: 8px;
    color: #fff;
    background-color: ${variaveis.cinza};
    border: none;
    outline: none;
    border-radius: 16px;
  }
`

export const ActionBarForm = styled.div`
  display: flex;
  gap: 10px;

  a {
    width: 100%;
    text-decoration: none;
  }
`

export const ButtonForm = styled.button<Props>`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 24px;
  padding: 10px;
  font-family: poppins, sans-serif;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  color: #fff;
  background-color: ${(props) =>
    props.$buttontypestyle === 'normal' ? variaveis.laranja : 'red'};
  border-radius: 9999999px;
  border: none;
  outline: none;
`
