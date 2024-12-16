/* eslint-disable prettier/prettier */
import { Game } from '../../pages/Home'
import { Product } from '../Products'

import { Container, List, Title } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
}

export const formataPreco = (preco = 0): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

export const ProductsList = ({ title, background, games }: Props) => {
  const getGameTags = (game: Game): string[] => {
    const tags: string[] = []
    if (game.release_date === '') {
      tags.push(game.release_date)
    }
    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`)
    }
    if (game.prices.current) {
      tags.push(formataPreco(game.prices.current) as string)
    }
    return tags
  }
  return (
    <Container background={background}>
      <div className="container">
        <Title>{title}</Title>
        <List>
          {games.map((game) => (
            <li key={game.id}>
              <Product
                id={game.id}
                category={game.details.category}
                description={game.description}
                image={game.media.thumbnail}
                infos={getGameTags(game)}
                system={game.details.system}
                title={game.name}
                key={game.id}
              />
            </li>
          ))}
        </List>
      </div>
    </Container>
  )
}
