import styled from 'styled-components'

interface Props {
  center?: boolean
}

export const Titulo = styled.h3<Props>`
  font-size: 24px;
  font-weight: bold;
  text-align: ${(props) => (props.center ? 'center' : 'initial')};
`
