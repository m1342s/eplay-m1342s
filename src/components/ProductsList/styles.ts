/* eslint-disable prettier/prettier */
import styled from 'styled-components'
import { cores } from '../../styles'
import { Props } from '.'
import { Card } from '../Products/styles'

export const Container = styled.section<Omit<Props,'title'| 'games'>>`
  padding: 32px 0;
  background-color:${props=>props.background==='gray'? cores.cinza: cores.preta};

  ${Card}{
  background-color:${props=>props.background==='black'? cores.cinza:cores.preta};
  }
`
export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 24px;
  margin-top: 40px;
`

export const Title = styled.h2`
color:${cores.branca}
font-size:18px;
font-weight:bold;
`