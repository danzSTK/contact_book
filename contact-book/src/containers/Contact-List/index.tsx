import { useSelector } from 'react-redux'
import { RootState } from '../../redux'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { ContainerPlusContact, ButtonPlusContact, TitleSection } from './styles'
import { TextInfo } from '../../styles/styles'
import Contato from '../../components/Contato'
import { Link } from 'react-router-dom'

const Contatos = () => {
  const contatos = useSelector(
    (state: RootState) => state.contatos.contatosList
  )
  const favoritos = useSelector((state: RootState) => state.contatos.favoritos)

  return (
    <section>
      <article>
        {favoritos.length > 0 && (
          <>
            <TitleSection>CONTATOS FAVORITOS</TitleSection>
            <TextInfo>
              Você tem o total de {favoritos.length} contatos favoritos
            </TextInfo>
            {favoritos.map((f) => {
              if (f.favorite) {
                return <Contato key={f.id} contato={f} />
              }
            })}
          </>
        )}
      </article>
      <article>
        <TitleSection>CONTATOS</TitleSection>
        <div>
          <TextInfo>Você tem o total de {contatos.length} contatos</TextInfo>
        </div>
        {contatos.map((item) => (
          <Contato key={item.id} contato={item} />
        ))}
      </article>
      <ContainerPlusContact>
        <Link to={'cadastro'}>
          <ButtonPlusContact>
            <FontAwesomeIcon icon={faPlus} />
          </ButtonPlusContact>
        </Link>
      </ContainerPlusContact>
    </section>
  )
}

export default Contatos
