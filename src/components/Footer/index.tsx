/* eslint-disable prettier/prettier */
import { Container, FooterSection, Link, Links, SectionTitle } from './styles'

/* eslint-disable prettier/prettier */

const anoAtual=new Date().getFullYear()
export const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitle>Categorias</SectionTitle>
        <Links>
          <li>
            <Link to="/categorias#rpg">RPG</Link>
          </li>
          <li>
            <Link to="/categorias#action">Ação</Link>
          </li>
          
          <li>
            <Link to="/categorias#sports">Esportes</Link>
          </li>
          <li>
            <Link to="/categorias#simulation">Simulação</Link>
          </li>
          <li>
            <Link to="/categorias#fight">Luta</Link>
          </li>
          
        </Links>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Acesso Rápido</SectionTitle>
        <Links>
         
          <li>
            <Link to="/#on-sale">Promoções</Link>
          </li>
          <li>
            <Link to="/#coming-soon">Em breve</Link>
          </li>
        </Links>
      </FooterSection>
      <p>{anoAtual} - &copy; E-PLAY Todos os direitos reservados</p>
    </div>
  </Container>
)
