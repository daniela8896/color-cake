import React from 'react'
import './Footer.css'
import { NavLink } from "react-router-dom";
import carShopping from '../../img/carShopping.png'
import logo from '../../img/logoClaro.svg'
import instagram from '../../img/instagram.png'
import facebook from '../../img/facebook.png'
import whatsapp from '../../img/whatsapp.png'

const Footer = () => {
  return (
    <footer className='d-flex flex-wrap justify-content-evenly align-items-center py-3 my-4 border-top'>
      <p className='col-md-4 mb-0 text-center fs-3 mt-5'>Herramientas y utensilios de reposteria</p>

      <NavLink to="/" className='col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none'>
        <img src={logo} alt="carrito" className="imglogonav" />
      </NavLink>

        <ul className='nav col-md-4 justify-content-end align-items-center mt-3 gap-2'>
          <li className='nav-item'><NavLink to='/' className=' px-2 cl fs-3'>Inicio</NavLink></li>
        <li className='nav-item'><NavLink to='/productos' className=' px-2 fs-4 cl'>Productos</NavLink></li>
        <li className='nav-item'><NavLink to='/contacto' className=' px-2 fs-4 cl'>Contacto</NavLink></li>
        <li className='nav-item'><NavLink to='/nosotros' className=' px-2 fs-4 cl'>Nosotros</NavLink></li>
        <li className='nav-item'><NavLink to='/carrito' className=' px-4 fs-4 cl2'>
          <img src={carShopping} alt="cart" className="cart-img" />
          Carrito</NavLink></li>
      </ul>
      
      <div className='d-flex justify-content-between gap-5 align-items-end'>
        <div>
          <img src={instagram} alt="foto" width='30px' />
        </div>
        <div>
          <img src={facebook} alt="foto" width='30px'/>
        </div>
        <div>
          <img src={whatsapp} alt="foto" width='30px' />
        </div>
      </div>
    </footer>
  )
}

export default Footer