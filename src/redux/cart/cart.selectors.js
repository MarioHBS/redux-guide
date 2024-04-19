export const selectProductsCount = (root) =>
  root.cartReducer.products.reduce(
    (acc, curr) => acc + curr.quantity,
    0
  )

export const selectProductsTotal = (root) =>
  root.cartReducer.products.reduce(
    (acc, curr) => acc + curr.quantity * curr.price,
    0
  )
