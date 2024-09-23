import Cadastro from './Pages/Cadastro'
import ContatoInfo from './Pages/Contato_Info'
import Editar from './Pages/Editar_contato'
import Home from './Pages/Home'
import { Container, GlobalStyle } from './styles/styles'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'cadastro',
    element: <Cadastro />
  },
  {
    path: 'informacao/:id',
    element: <ContatoInfo />
  },
  {
    path: 'editarContato/:id',
    element: <Editar />
  }
])

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <RouterProvider router={router} />
      </Container>
    </>
  )
}

export default App
