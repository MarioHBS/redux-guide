import CartActionTypes from './action-types'

const initialState = {
  products: [],
  productsTotalPrice: 0,
}

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
        return {
          ...state,
          products: state.products.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        }
      }
      // senão inserir normal
      return {
        ...state,
        products: [...state.products, {...action.payload, quantity: 1}],
      }
    case CartActionTypes.RMV_PRODUCT:
      return removeProduct(state, action.payload)
    case CartActionTypes.INC_PRODUCT:
      return {
        ...state,
        products: state.products.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1}
            : item
        )
      }
    case CartActionTypes.DEC_PRODUCT:
      const decreasedProduct = state.products.find((item) => item.id === action.payload)
      if (decreasedProduct.quantity === 1) {
        return removeProduct(state, action.payload)
      }

      return {
        ...state,
        products: state.products.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity - 1}
            : item
        )
      }
    default:
      return state
  }
}

export default cartReducer
