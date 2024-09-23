import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Contact = {
  name: string
  email: string
  number: number
  id?: number
  favorite: boolean
}

type ContatoState = {
  contatosList: Contact[]
  favoritos: Contact[]
}

const initialState: ContatoState = {
  contatosList: [
    {
      name: 'Daniel Monitor',
      email: 'daniel123@gmail.com',
      number: 8599990000,
      favorite: true,
      id: 1
    },
    {
      name: 'Miguel Monitor',
      email: 'miguel123@gmail.com',
      number: 8588880000,
      favorite: false,
      id: 2
    },
    {
      name: 'André Monitor',
      email: 'andre123@gmail.com',
      number: 8577770000,
      favorite: false,
      id: 3
    }
  ],
  favoritos: [
    {
      name: 'Daniel Monitor',
      email: 'daniel123@gmail.com',
      number: 8599990000,
      favorite: true,
      id: 1
    }
  ]
}
const contactSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    setContact: (state, action: PayloadAction<Contact>) => {
      action.payload.id = state.contatosList.length + 1
      state.contatosList.push(action.payload)
    },
    removeContact: (state, action: PayloadAction<Contact>) => {
      const indexDoContato = state.contatosList.findIndex(
        (item) => item.id === action.payload.id
      )
      const indexDoContatoFavorito = state.favoritos.findIndex(
        (item) => item.id === action.payload.id
      )
      function removeFavorito() {
        state.favoritos.splice(indexDoContatoFavorito, 1)
      }

      function remove() {
        state.contatosList.splice(indexDoContato, 1)

        if (indexDoContatoFavorito >= 0) {
          removeFavorito()
        }
      }

      remove()
    },
    editarContato: (state, action: PayloadAction<Contact>) => {
      const indexDoContato = state.contatosList.findIndex(
        (item) => item.id === action.payload.id
      )
      const indexDoContatoFavorito = state.favoritos.findIndex(
        (item) => item.id === action.payload.id
      )

      if (indexDoContatoFavorito >= 0) {
        state.favoritos[indexDoContatoFavorito] = action.payload
      }
      state.contatosList[indexDoContato] = action.payload
    },
    favoritar: (state, action: PayloadAction<Contact>) => {
      const indexDoContato = state.contatosList.findIndex(
        (c) => c.id === action.payload.id
      )
      const newFavorite: Contact = {
        email: action.payload.email,
        name: action.payload.name,
        number: action.payload.number,
        favorite: !action.payload.favorite,
        id: action.payload.id
      }
      state.contatosList[indexDoContato].favorite = !action.payload.favorite
      state.favoritos.push(newFavorite)
    },
    removeFavorito: (state, action: PayloadAction<Contact>) => {
      const indexDoContatoFavorito = state.favoritos.findIndex(
        (c) => c.id === action.payload.id
      )
      const indexDoContatoList = state.contatosList.findIndex(
        (c) => c.id === action.payload.id
      )
      const favorito = action.payload.favorite

      if (favorito === false) return

      state.contatosList[indexDoContatoList].favorite = !action.payload.favorite
      state.favoritos.splice(indexDoContatoFavorito, 1)
    }
  }
})

export const {
  setContact,
  favoritar,
  removeFavorito,
  removeContact,
  editarContato
} = contactSlice.actions
export default contactSlice.reducer
