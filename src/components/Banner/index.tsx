/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable prettier/prettier */
import { Image, Titulo, Precos } from './styles'
import banner from '../../images/banner-homem-aranha.png'
import { Tag } from '../Tag'
import { Button } from '../Button'

export const Banner = () => (
  
  <Image style={{ backgroundImage: `url(${banner})` }}>
    <div className="container">
      <Tag size='big'>Destaque do dia</Tag>
      <div>
      <Titulo>Marvel's Spider-Man: Miles Morales PS4 & PS5</Titulo>
      <Precos>
        De <span>R$ 250,00</span>
        <br />
        por apenas R$ 99,90
      </Precos>
      </div>
      <Button type='link' to='/produto' title='Clique aqui para aproveitar essa oferta'>
        Aproveitar
      </Button>
    </div>
  </Image>
)
