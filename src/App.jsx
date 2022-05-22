import logo from './logo.svg'
import './App.css'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'
import NavbarRespon from './NavbarRespon/NavbarRespon'
import Home from './Views/Home'
import { Route, Routes } from "react-router-dom";
import 'flowbite';
import ProductsView from './Views/ProductsView'
function App() {

  return (
    <div className='bg-color4 w-full h-screen relative'>
      <Header />
      <NavbarRespon />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsView/>} />
      </Routes>
      <Footer /> 
    </div>
  )
}

export default App
