import React from "react";
import './Nav.css'
import { NavLink } from "react-router-dom";
import carShopping from '../../img/carShopping.png'
import logo from '../../img/logoClaro.svg'
import menu from '../../img/menu.svg'
import close from '../../img/close.svg'

import ButtonSearch from "../Buttons/ButtonSearch";
import { useSelector } from "react-redux";

const Nav = () => {
    const state = useSelector((state) => state.addItem)
    return (
        <>
            <nav className="nav_principal">
                <div className="nav__container">
                    <div className="nav__logo">
                        <NavLink to='/'> <img src={logo} alt="logo" /></NavLink> 
                    </div>
                    <label htmlFor="menu" className="nav__lavel">
                        <img src={menu} alt="menu"  className="nav_img"/>
                    </label>
                    <input type="checkbox" id="menu" className="nav__input"/>
                    
                    <div className="nav__menu">
                        <NavLink to='/productos' className='nav__item'> Productos </NavLink>
                        <NavLink to='/contacto' className='nav__item'> Contacto </NavLink>
                        <NavLink to='/nosotros' className='nav__item'> Nosotros </NavLink>
                        <NavLink to='/carrito' className='nav__item'>
                            <img src={carShopping} alt="cart" className="cart-img" />
                            <span className="item__total">{state.length}</span>
                        </NavLink>
                    </div>

                </div>
                
           </nav>

        </>

    )
};

export default Nav;
