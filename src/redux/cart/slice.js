import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      // verificar se já existe
      const productAlreadyExists = state.products.some((item) => item.id === action.payload.id)
      // se tiver, acrescentar um
      if (productAlreadyExists) {
        state.products = incrementProduct(state, action.payload.id)
      } else {
        // senão inserir normal
        state.products = [...state.products, { ...action.payload, quantity: 1 }]
      }
    },

    removeProduct: (state, action) => {
      state.products = state.products.filter((item) => item.id !== action.payload)
    },

    increaseQuantity: (state, action) => {
      state.products = incrementProduct(state, action.payload)
    },
    decreaseQuantity: (state, action) => {
      state.products = state.products
        .map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    },
  },
})

const incrementProduct = (state, pid) =>
  state.products.map((item) => (item.id === pid ? { ...item, quantity: item.quantity + 1 } : item))

export const { addProduct, decreaseQuantity, increaseQuantity, removeProduct } = cartSlice.actions
export default cartSlice.reducer
