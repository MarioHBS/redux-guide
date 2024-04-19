import CartActionTypes from './action-types'

export const addProductToCart = (payload) => ({
  type: CartActionTypes.ADD_PRODUCT,
  payload,
})

export const removeProductFromCart = (payload) => ({
  type: CartActionTypes.RMV_PRODUCT,
  payload,
})

export const increaseProductInCart = (payload) => ({
  type: CartActionTypes.INC_PRODUCT,
  payload,
})

export const decreaseProductInCart = (payload) => ({
  type: CartActionTypes.DEC_PRODUCT,
  payload,
})
