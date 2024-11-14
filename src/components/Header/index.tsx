/* eslint-disable prettier/prettier */

import { HeaderBar, Links, LinksItens, LinkCart } from './styles'

import logo from '../../images/logo.svg'
import carrinho from '../../images/carrinho.svg'
import { Link } from 'react-router-dom'
/* eslint-disable @typescript-eslint/no-unused-vars */
const Header = () => (
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
    <LinkCart href="#">
      0-produto(s)
      <img src={carrinho} alt="Carrinho" />
    </LinkCart>
  </HeaderBar>
)

export default Header
