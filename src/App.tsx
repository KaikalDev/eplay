import { BrowserRouter } from 'react-router-dom'

import { StyleGlobal } from './styles'

import Header from './components/Header'
import Rotas from './pages/routes'
import Footer from './components/Footer'
function App() {
  return (
    <BrowserRouter>
      <StyleGlobal />
      <div className="container">
        <Header />
      </div>
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
