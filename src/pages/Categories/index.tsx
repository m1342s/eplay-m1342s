/* eslint-disable prettier/prettier */
import { ProductsList } from '../../components/ProductsList'
import { Game } from '../Home/index'
import { useEffect, useState } from 'react'

import {useGetActionGamesQuery,useGetFightGamesQuery,useGetRpgGamesQuery,useGetSportGamesQuery,useGetSimulacaoGamesQuery} from "../../services/api"

/* eslint-disable prettier/prettier */
export const Categories = () => {
  const{data:actionGames}=useGetActionGamesQuery()
  const{data:sportGames}=useGetSportGamesQuery()
  const{data:fightGames}=useGetFightGamesQuery()
  const{data:rpgGames}=useGetRpgGamesQuery()
  const{data:simulacaoGames}=useGetSimulacaoGamesQuery()

if(actionGames && sportGames && fightGames && rpgGames && simulacaoGames){

  return (
    <>
      <ProductsList games={actionGames} title="Ação" background="black" id='action' />
      <ProductsList games={sportGames} title="Esportes" background="gray" id='sports' />
      <ProductsList games={fightGames} title="Luta" background="black" id='fight' />
      <ProductsList games={rpgGames} title="RPG" background="gray" id='rpg' />
      <ProductsList games={simulacaoGames} title="Simulação" background="black" id='simulation' />
    </>
  )
}
return <h4>Carregando</h4>
}
