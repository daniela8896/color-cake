import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../components/Home'
import About from '../pages/about/About'
import Contact from '../pages/contact/contact'
import Recipe from '../pages/recipe/Recipe'
import Products from '../pages/products/Products'
import CategoryMasas from '../components/categoryMasas/CategoryMasas';
import CategoryMoldes from '../components/categoryMoldes/CategoryMoldes';
import CategoryDecoration from '../components/categoryDecoration/CategoryDecoration';
import DetailsDeco from '../components/details/DetailsDeco';
import DetailsMasas from '../components/details/DetailsMasas';
import DetailsMoldes from '../components/details/DetailsMoldes';
import Cart from './Cart'
import Checkout from './Checkout'
import Footer from './footer/Footer'
import Nav from './nav/Nav'


const RoutesP = () => {

  return (
      <BrowserRouter>
          <Nav />
          <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/productos' element={<Products />} />
              <Route path='/contacto' element={<Contact />} />
              <Route path='/recetas' element={<Recipe />} />
              <Route path='/nosotros' element={<About />} />
              <Route path='/masas' element={<CategoryMasas />} />
              <Route path='/moldes' element={<CategoryMoldes />} />
              <Route path='/decoracion' element={<CategoryDecoration />} />
              <Route path='/detalles' element={<DetailsDeco />} />
              <Route path='/detallesDeco/:id' element={<DetailsDeco />} />
              <Route path='/detallesMasas/:id' element={<DetailsMasas />} />
              <Route path='/detallesMoldes/:id' element={<DetailsMoldes />} />
              <Route path='/carrito' element={<Cart />} />
              <Route path='/comprar' element={<Checkout />} />

          </Routes>
          <Footer />
      </BrowserRouter>
  )
}

export default RoutesP
