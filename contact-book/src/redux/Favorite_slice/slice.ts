import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Contact } from '../Contact_slice/slice'

const initialState: Contact[] = []

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Contact>) => {
      const indexDoContato = state.findIndex((c) => c.id === action.payload.id)

      state[indexDoContato]
    }
  }
})

// certo é eu criar somente um slice com o reducer favoritar, e também armazenar os que foram favoritados em um array diferente de contatos contatos será a array que guardará todos os contatos, sem exceções, e o inititalState irá armazenar ambos
