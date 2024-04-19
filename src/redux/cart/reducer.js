import CartActionTypes from './action-types'

const initialState = {
  products: [],
}

const incrementProduct = (state, pid) => ({
  ...state,
  products: state.products.map((item) =>
    item.id === pid
      ? { ...item, quantity: item.quantity + 1 }
      : item
  ),
})

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
      return {
        ...state,
        products: state.products.filter((item) => item.id !== action.payload)
      }
    case CartActionTypes.INC_PRODUCT:
      return incrementProduct(state, action.payload)
    case CartActionTypes.DEC_PRODUCT:
      return {
        ...state,
        products: state.products.map((item) =>
          item.id === action.payload
            ? {...item, quantity: item.quantity - 1}
            : item
        ).filter((item) => item.quantity > 0),
      }
    default:
      return state
  }
}

export default cartReducer
