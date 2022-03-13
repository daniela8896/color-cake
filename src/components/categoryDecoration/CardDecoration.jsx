import React from 'react'
import { NavLink } from "react-router-dom";



const CardDecoration = (props, addToCart) => {
   

  return (
      <div key={props.id}>
          <div className="card cardShow shadow" >
              <img src={props.img} alt={props.nombre} className='card-img-top' />
              <div className="card-body d-flex flex-column align-items-center">
                  <h5 className="card-title text-center"> {props.title} </h5>
                  <p className="card-text"> Presentación: {props.presentation} </p>
                  <p className="card-text"> Precio: {props.price} </p>
                  
                      
                      <div className=''>
                          <NavLink className='link2' to={`/detallesDeco/${props.id}`} >Detalles</NavLink>
                      </div>

              </div>
          </div>
      </div>
  )
}

export default CardDecoration
