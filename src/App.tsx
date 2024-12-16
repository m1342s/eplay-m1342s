/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Header from './components/Header'
import { GlobalCss } from './styles'
import {Provider} from "react-redux"
import { Footer } from "./components/Footer"
import { Rotas } from "./routes"
import { store } from "./store"



function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
     <Rotas/>
     <Footer/>
    </BrowserRouter>
    </Provider>
  )
}

export default App
