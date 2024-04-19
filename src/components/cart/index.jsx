// Styles
import { useSelector } from 'react-redux'
import * as Styles from './styles'
import CartItem from '../cart-item'
import { selectProductsTotal } from '../../redux/cart/cart.selectors'

const Cart = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false)
  const { products } = useSelector((root) => root.cartReducer)
  const productTotal = useSelector(selectProductsTotal)

  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>Seu Carrinho</Styles.CartTitle>

        {products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}

        <Styles.CartTotal>R$ {productTotal}</Styles.CartTotal>
      </Styles.CartContent>
    </Styles.CartContainer>
  )
}

export default Cart
