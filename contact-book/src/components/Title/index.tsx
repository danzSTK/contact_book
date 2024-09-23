import * as S from './styles'

type Props = {
  children: React.ReactNode
  center?: boolean
}

const Titulo = (props: Props) => {
  return <S.Titulo center={props.center}>{props.children}</S.Titulo>
}

export default Titulo
