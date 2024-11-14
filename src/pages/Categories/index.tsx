/* eslint-disable prettier/prettier */
import { ProductsList } from '../../components/ProductsList'
import resident from '../../images/resident.png'
import diablo from '../../images/diablo.png'
import starWars from '../../images/star_wars.png'
import zelda from '../../images/zelda.png'
import { Game } from '../Home/index'

const promocoes: Game[] = []
const emBreve: Game[] = []

/* eslint-disable prettier/prettier */
export const Categories = () => (
  <>
    <ProductsList games={promocoes} title="RPG" background="gray" />
    <ProductsList games={emBreve} title="Ação" background="black" />
    <ProductsList games={promocoes} title="Aventura" background="gray" />
    <ProductsList games={emBreve} title="FPS" background="black" />
  </>
)
