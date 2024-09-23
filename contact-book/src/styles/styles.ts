import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: ${variaveis.branco};
    font-family: Poppins, sans-serif;
    background-color: ${variaveis.cinzaBlack};
  }
`

export const Container = styled.div`
  display: block;
  max-width: 80%;
  width: 100%;
  margin: 0 auto;
  margin-top: 46px;
  padding: 20px 0;
`

export const TextInfo = styled.p`
  display: block;
  text-align: center;
  color: ${variaveis.brancoBaixo};
  font-family: 'Roboto Mono', sans-serif;
`

export const TextPrimary = styled.p`
  font-family: 'Roboto Mono', sans-serif;
  text-transform: capitalize;
  color: ${variaveis.branco};
  font-size: 16px;
  margin-right: 8px;
`

export const ButtonIcon = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  padding: 16px;
  background-color: transparent;
  border: none;
  outline: none;
  border-radius: 50%;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
`
