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
    <footer className='bgFooter '>
      <div className='container '>
        <div className='row'>
          <div className="col-md-12 col-sm-8 d-flex align-items-center justify-content-around ">
            <NavLink to="/" className='align-items-center'>
              <img src={logo} alt="carrito" className="" width='200px' height='200' />
            </NavLink>
            <ul className='d-flex justify-content-around align-items-center mt-5 flex-wrap'>
              <li className='nav-item cl'><NavLink to='/' className=' px-2 cl fs-3'>Inicio</NavLink></li>
              <li className='nav-item cl'><NavLink to='/productos' className=' px-2 fs-4 cl'>Productos</NavLink></li>
              <li className='nav-item cl'><NavLink to='/contacto' className=' px-2 fs-4 cl'>Contacto</NavLink></li>
              <li className='nav-item cl'><NavLink to='/nosotros' className=' px-2 fs-4 cl'>Nosotros</NavLink></li>
              <li className='nav-item cl'><NavLink to='/carrito' className=' px-4 fs-4 cl2'>
                <img src={carShopping} alt="cart" className="cart-img" />
                Carrito</NavLink></li>
            </ul>
          </div>
        </div>


        <div className="container  ">
          <div className='row d-flex justify-content-center  align-items-center mb-5'>
            <div className='col-md-4 col-sm-12 d-flex align-items-center mb-5 justify-content-center'>
              <a href='https://www.instagram.com/colorcakeenvigado/?hl=es-la'> <img src={instagram} alt="foto" width='50px' /></a>
             
            </div>
            <div className='col-md-4 col-sm-12 d-flex align-items-center mb-5 justify-content-center'>
              <a href='https://es-la.facebook.com/pages/category/Grocery-Store/color-cake-2240539145973092/'><img src={facebook} alt="foto" width='50px' /> </a>
              
            </div>
            <div className='col-md-4 col-sm-12 d-flex align-items-center mb-5 justify-content-center'>
              <a href='https://api.whatsapp.com/send?phone=573012862612&text=Hola,%20quiero%20%20mas%20informaci%C3%B3n%20de%20los%20productos?'> <img src={whatsapp} alt="foto" width='50px' /> </a>
             
            </div>
          </div>
        </div>

      </div>
      


    </footer>
  )
}

export default Footer