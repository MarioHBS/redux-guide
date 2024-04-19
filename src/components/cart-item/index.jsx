import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

// Styles
import { useDispatch } from 'react-redux'
import * as Styles from './styles'

import { decreaseQuantity, increaseQuantity, removeProduct } from '../../redux/cart/slice'

const CartItem = ({ product }) => {
  const dispatch = useDispatch()

  const handleRemoveClick = () => dispatch(removeProduct(product.id))
  const handleIncreaseClick = () => dispatch(increaseQuantity(product.id))
  const handleDecreaseClick = () => dispatch(decreaseQuantity(product.id))

  return (
    <Styles.CartItemContainer>
      <Styles.CartItemImage imageUrl={product.imageUrl} />

      <Styles.CartItemInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>

        <Styles.CartItemQuantity>
          <AiOutlineMinus
            size={20}
            onClick={handleDecreaseClick}
            aria-label={`Decrease quantity of ${product.name}`}
          />
          <p>{product.quantity}</p>
          <AiOutlinePlus
            size={20}
            onClick={handleIncreaseClick}
            aria-label={`Increase quantity of ${product.name}`}
          />
        </Styles.CartItemQuantity>
      </Styles.CartItemInfo>

      <Styles.RemoveButton onClick={handleRemoveClick} aria-label={`Remove ${product.name}`}>
        <AiOutlineClose size={25} />
      </Styles.RemoveButton>
    </Styles.CartItemContainer>
  )
}

export default CartItem
