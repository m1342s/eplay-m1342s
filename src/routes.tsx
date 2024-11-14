/* eslint-disable prettier/prettier */
import { Route, Routes } from 'react-router-dom'
import { Categories } from './pages/Categories'
import { Home } from './pages/Home'
import {Product} from './pages/Product'


export const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categorias" element={<Categories />} />
    <Route path="/product/:id" element={<Product/>} />
  </Routes>
)
