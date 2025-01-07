/* eslint-disable prettier/prettier */
import { Route, Routes } from 'react-router-dom'
import { Categories } from './pages/Categories'
import { Home } from './pages/Home'
import {Product} from './pages/Product'
import { Checkout } from './pages/Checkout'


export const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categorias" element={<Categories />} />
    <Route path="/product/:id" element={<Product/>} />
    <Route path="/checkout" element={<Checkout/>}/>
  </Routes>
)
