import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Cart from './Components/Cart/Cart'
import Product from './Views/Product'

//vistas
import About from './Views/About'
import Home from './Views/Home'

import { CartProvider } from './Context/CartContext'
import { Routes, Route, Link } from "react-router-dom";




function App() {
  

  return (
    <CartProvider className='relative min-h-screen'>
      <Cart/>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product/>} />
      </Routes>
      <Footer/>
    </CartProvider>
  )
}

export default App
