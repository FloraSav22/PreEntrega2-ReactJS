//import './App.css'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { ItemListContainter } from './components/ItemListContainer/ItemListContainter'
import NavBar from './components/NavBar/NavBar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainter greetings={"Nuestra Seleccion"} />} />
        <Route path='/category/:id' element={<ItemListContainter />} />
        <Route path='/detail/:id' element={<ItemListContainter />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
