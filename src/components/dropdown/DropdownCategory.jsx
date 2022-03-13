import React, { useState } from 'react'
import './DropdownCategory.css'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'
import { NavLink } from "react-router-dom";


const DropdownCategory = () => {

  const [dropdown, setdropdown] = useState(false);


  const abrircerrarDropdown=() => {
   setdropdown(!dropdown)
 }

  return (
    <div>

      <Dropdown isOpen={dropdown} toggle={abrircerrarDropdown} >
        <DropdownToggle caret className='btnDropdown'>
          <NavLink className='productos' to='/productos' >Categorias</NavLink>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>
            <NavLink className='category' to='/masas' >Masas y cubiertas</NavLink>
          </DropdownItem>
          <DropdownItem>
            <NavLink className='category' to='/decoracion' >Decoración</NavLink>
          </DropdownItem>
          <DropdownItem>
            <NavLink className='category' to='/moldes' >Moldes y cajas</NavLink>
          </DropdownItem>
        </DropdownMenu>
     </Dropdown>

    </div>
  )
}

export default DropdownCategory