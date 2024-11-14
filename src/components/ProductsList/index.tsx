/* eslint-disable prettier/prettier */
import { Game } from '../../pages/Home'
import { Product } from '../Products'

import { Container, List, Title } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
}
export const ProductsList = ({ title, background, games }: Props) => {
  const formataPreco = (preco: number) => {
    new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }
  const getGameTags = (game: Game) => {
    const tags = []
    if (game.release_date === '') {
      tags.push(game.release_date)
    }
    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`)
    }
    if (game.prices.current) {
      tags.push(formataPreco(game.prices.current))
    }
    return tags
  }
  <Container background={background}>
    <div className="container">
      <Title>{title}</Title>
      <List>
        {games.map((game) => (
          <Product
            category={game.details.category}
            description={game.description}
            image={game.media.thumbnail}
            infos={getGameTags(game)}
            system={game.details.system}
            title={game.name}
            key={game.id}
          />
        ))}
      </List>
    </div>
  </Container>
}
