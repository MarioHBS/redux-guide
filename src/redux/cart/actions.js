import CartActionTypes from './action-types'

export const addProductToCart = (payload) => ({
  type: CartActionTypes.ADD_PRODUCT,
  payload,
})

export const removeProductFromCart = (payload) => ({
  type: CartActionTypes.RMV_PRODUCT,
  payload,
})
