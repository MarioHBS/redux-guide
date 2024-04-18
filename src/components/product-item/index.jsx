import { BsCartPlus } from 'react-icons/bs'

// Components
import CustomButton from '../custom-button/index'

// Styles
import * as Styles from './styles'
import { useDispatch } from 'react-redux'

// Utilities
import { addProductToCart } from '../../redux/cart/actions'

const ProductItem = ({ product }) => {
  const dispatech = useDispatch()
  const handleProductClick = () => {
    dispatech(addProductToCart(product))
  }

  return (
    <Styles.ProductContainer>
      <Styles.ProductImage imageUrl={product.imageUrl}>
        <CustomButton startIcon={<BsCartPlus />} onClick={handleProductClick}>
          Adicionar ao carrinho
        </CustomButton>
      </Styles.ProductImage>

      <Styles.ProductInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>
      </Styles.ProductInfo>
    </Styles.ProductContainer>
  )
}

export default ProductItem
