/* eslint-disable prettier/prettier */
import { Banner } from '../../components/Banner'
import { ProductsList } from '../../components/ProductsList'
import resident from '../../images/resident.png'
import diablo from '../../images/diablo.png'
import starWars from '../../images/star_wars.png'
import zelda from '../../images/zelda.png'
import { useEffect, useState } from 'react'

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

/* eslint-disable prettier/prettier */
export const Home = () => {
  const [promocoes, setPromocoes] = useState<Game[]>([])
  const [emBreve, setEmBreve] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/promocoes')
    .then(res=>res.json())
    .then((res)=>setPromocoes(res))
  }, [])
  return (
    <>
      <Banner />
      <ProductsList games={promocoes} title="Promoções" background="gray" />
      <ProductsList games={emBreve} title="Em breve" background="black" />
    </>
  )
}
