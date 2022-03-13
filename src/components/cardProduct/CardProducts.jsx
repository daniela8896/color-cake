import React from 'react'
import './CardProducts.css'


const CardProducts = (props) => {
  return (
    <div>
      <div className="card cardShow shadow">
        <img src={props.img} alt={props.nombre} className='card-img-top' />
        <div className="card-body">
          <h5 className="card-title text-center fs-3 titleCP"> {props.nombre} </h5>
          <p className="card-text fs-5"> Presentación: {props.presentation} </p>
          <p className="card-text fs-5"> Precio: {props.price} </p>
        </div>
      </div> 
    </div>
  )
}

export default CardProducts