import React from 'react'
import '../Buttons/Buttons.css'
import { NavLink } from "react-router-dom";

const ButtonSeeMore = () => {
  return (
    <div>
      <div>
        <NavLink className='seeMore' to='/' >Ver mas...</NavLink>
      </div>
    </div>
  )
}

export default ButtonSeeMore