import React from 'react'
import ButtonBuy from '../Buttons/ButtonBuy'
import { NavLink } from "react-router-dom";


const CardMoldes = (props) => {
    return (
        <div key={props.id}>
            <div className="card cardShow shadow">
                <img src={props.img} alt={props.nombre} className='card-img-top' />
                <div className="card-body">
                    <h5 className="card-title text-center"> {props.nombre} </h5>
                    <p className="card-text"> Presentación: {props.presentation} </p>
                    <p className="card-text"> Precio: {props.price} </p>
                    <div className='d-flex justify-content-between'>

                        <div>
                            <NavLink className='link2' to={`/detallesMoldes/${props.id}`} >Detalles</NavLink>
                        </div>
                            
                            <ButtonBuy />
                    </div>

                        </div>
                    </div>

                </div>
         
    )
}

export default CardMoldes
