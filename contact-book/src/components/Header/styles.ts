import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const ContainerHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100vw;
  height: 40px;
  padding: 30px 0;
  background-color: ${variaveis.laranja};
`

export const Container = styled.div`
  max-width: 90%;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ContainerButtons = styled.div`
  display: flex;
  gap: 10px;
`
