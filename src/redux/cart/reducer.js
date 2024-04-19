import CartActionTypes from './action-types'

const initialState = {
  products: [],
  productsTotalPrice: 0,
}

const incrementProduct = (state, pid) => ({
  ...state,
  products: state.products.map((item) =>
    item.id === pid
      ? { ...item, quantity: item.quantity + 1 }
      : item
  ),
})
const removeProduct = (state, pid) => {
  return {
    ...state,
    products: state.products.filter((item) => item.id !== pid)
  }
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_PRODUCT:
      // verificar se já existe
      const productAlreadyExists = state.products.some((item) => item.id === action.payload.id)
      // se tiver, acrescentar um
      if (productAlreadyExists) {
        return incrementProduct(state, action.payload.id)
      }
      // senão inserir normal
      return {
        ...state,
        products: [...state.products, {...action.payload, quantity: 1}],
      }
    case CartActionTypes.RMV_PRODUCT:
      return removeProduct(state, action.payload)
    case CartActionTypes.INC_PRODUCT:
      return incrementProduct(state, action.payload)
    case CartActionTypes.DEC_PRODUCT:
      const updatedProducts = [...state.products]
      const prodIdx = state.products.findIndex((item) => item.id === action.payload)
      if (updatedProducts[prodIdx].quantity === 1) return removeProduct(state, action.payload)

      updatedProducts[prodIdx].quantity--

      return {
        ...state,
        products: updatedProducts
      }
    default:
      return state
  }
}

export default cartReducer
