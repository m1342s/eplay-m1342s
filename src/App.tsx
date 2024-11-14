/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Header from './components/Header'
import { GlobalCss } from './styles'
import { Home } from "./pages/Home"
import { Categories } from "./pages/Categories"
import { Footer } from "./components/Footer"
import { Rotas } from "./routes"



function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
     <Rotas/>
     <Footer/>
    </BrowserRouter>
  )
}

export default App
