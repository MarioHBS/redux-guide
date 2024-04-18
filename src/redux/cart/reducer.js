import CartActionTypes from './action-types'

const initialState = {
  products: [],
  productsTotalPrice: 0,
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
      return {
        ...state,
        products: state.products.filter((item) => item.id !== action.payload)
      }
    default:
      return state
  }
}

export default cartReducer
