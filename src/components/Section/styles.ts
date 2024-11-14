/* eslint-disable prettier/prettier */
import styled from 'styled-components'
import { cores } from '../../styles'
import { Props } from '.'
import { Card } from '../Products/styles'

export const Container = styled.section<Omit<Props, 'title' | 'games'>>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.background === 'gray' ? cores.cinza : cores.preta};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'black' ? cores.cinza : cores.preta};
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    text-align: left;
    max-width:640px;
  }
`

export const Title = styled.h2`
  color: white;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 40px;
`
