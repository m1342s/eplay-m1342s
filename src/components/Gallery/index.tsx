/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Section } from '../Section'
import zelda from '../../images/zelda.png'
import hogwarts from '../../images/fundoHogwarts.png'
import spiderman from '../../images/banner-homem-aranha.png'
import fechar from '../../images/fechar.png'

import play from '../../images/botaoPlay.png'
import lupa from '../../images/maisZoom.png'

import { Item, Items, Action, Modal, ModalContent } from './styles'
import { useState } from 'react'
import { GalleryItem } from '../../pages/Home'


const mock: GalleryItem[] = [
  {
    type: 'image',
    url: zelda
  },
  {
    type: 'image',
    url: hogwarts
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/uHGShqcAHlQ?si=y4Y6Yw_LIYZaG_U7'
  }
]

type Props = {
  defaultCover: string
  name: string
}
interface ModalState extends GalleryItem {
  visible: boolean
}

/* eslint-disable prettier/prettier */
export const Gallery = ({ defaultCover, name }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    visible: false,
    type: 'image',
    url: ''
  })

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }
  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return lupa
    return play
  }

  const closeModal=()=>{
    setModal({
      visible: false,
      type: 'image',
      url: ''
    })
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <Items>
          {mock.map((media, index) => (
            <Item
              key={media.url}
              onClick={() => {
                setModal({
                  visible:true,
                  type:media.type,
                  url:media.url
                })
              }}
            >
              <img
                src={getMediaCover(media)}
                alt={`Mídia ${index + 1} do ${name}`}
              />
              <Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique para maximizar a imagem"
                />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>
      <Modal className={modal.visible ? 'visible' : ''}>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img
              src={fechar}
              onClick={() =>
                closeModal()
              }
              alt="ícone de fechar"
            />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} alt="" />
          ) : (
            <iframe frameBorder={0} src={modal.url} />
          )}
        </ModalContent>
        <div onClick={()=>{
         closeModal() 
        }}  className="overlay"></div>
      </Modal>
    </>
  )
}
