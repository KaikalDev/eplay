import { Route, Routes } from 'react-router-dom'

import Home from './Home'
import Categories from './Categories'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categorias" element={<Categories />} />
  </Routes>
)

export default Rotas
