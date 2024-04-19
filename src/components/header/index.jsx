import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Components
import Cart from '../cart/index'

// Styles
import * as Styles from './styles'

import { loginUser, logoutUser } from '../../redux/user/actions'
import { selectProductsCount } from '../../redux/cart/cart.selectors'

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false)

  const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer)
  const dispatch = useDispatch()

  const productsCount = useSelector(selectProductsCount)

  const handleCartClick = () => {
    setCartIsVisible(true)
  }

  const handleLoginClick = () => {
    dispatch(loginUser({ name: 'Mário', email: 'mario@henrique.com' }))
  }
  const handleLogout = () => {
    dispatch(logoutUser())
  }

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {currentUser ? (
          <div onClick={handleLogout}>Sair</div>
        ) : (
          <div onClick={handleLoginClick}>Login</div>
        )}
        <div onClick={handleCartClick}>
          Carrinho{productsCount > 0 ? ` (${productsCount})` : ''}
        </div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  )
}

export default Header
