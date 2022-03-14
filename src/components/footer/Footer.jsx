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
          <div className="col-3">
            <NavLink to="/" className='col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none'>
              <img src={logo} alt="carrito" className="" width='200px' height='200' />
            </NavLink>
          </div>
          <div className="col-9 ">
            <ul className='d-flex justify-content-between align-items-center mt-5'>
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


        <div className="row  ">
          <div className='col d-flex justify-content-around  align-items-center mb-5'>
            <div>
              <img src={instagram} alt="foto" width='50px' />
            </div>
            <div>
              <img src={facebook} alt="foto" width='50px' />
            </div>
            <div>
              <img src={whatsapp} alt="foto" width='50px' />
            </div>
          </div>
        </div>

      </div>
      


    </footer>
  )
}

export default Footer