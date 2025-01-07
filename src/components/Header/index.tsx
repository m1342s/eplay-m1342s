/* eslint-disable prettier/prettier */

import { HeaderBar, Links, LinksItens, CartButton } from './styles'

import logo from '../../images/logo.svg'
import carrinho from '../../images/carrinho.svg'
import { Link } from 'react-router-dom'
/* eslint-disable @typescript-eslint/no-unused-vars */
import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
const Header = () => {
  const dispatch = useDispatch()

  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }
  return (
    <HeaderBar>
      <div>
        <Link to="/">
          <img src={logo} alt="EPLAY" />
        </Link>
        <nav>
          <Links>
            <LinksItens>
              <Link to="/categorias">Categorias</Link>
            </LinksItens>
            <LinksItens>
              <a href="#">Novidades</a>
            </LinksItens>
            <LinksItens>
              <a href="#">Promoções</a>
            </LinksItens>
          </Links>
        </nav>
      </div>
      <CartButton onClick={openCart}>
        {items.length}-produto(s)
        <img src={carrinho} alt="Carrinho" />
      </CartButton>
    </HeaderBar>
  )
}
export default Header
