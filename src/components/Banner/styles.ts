/* eslint-disable prettier/prettier */
import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Image = styled.div`
  widht: 100%;
  height: 560px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;

  .container {
    position: relative;
    padding-top: 340px;
    display: flex;
    justify-content:space-between;
    align-items:flex-end;
  }

  ${TagContainer} {
    position: absolute;
    top: 32px;
  }
`

export const Titulo = styled.h2`
  color: ${cores.branca};
  font-size: 36px;
  font-weight: bold;
  max-width: 450px;
`
export const Precos = styled.p`
  color: ${cores.branca};
  margin-top: 24px;
  font-size: 24px;

  font-weight: bold;
  span {
    text-decoration: line-through;
  }
`
