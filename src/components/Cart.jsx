import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { addItem, delItem } from '../redux/actions/index'



const Cart = () => {
    
    const state = useSelector((state) => state.addItem)
    const dispatch = useDispatch()

    const handleClose = (item) => {
        dispatch(delItem(item))
    }

   

    console.log(state)

    const cartItems = (cartItem) => {
       


        console.log(cartItem)
        return (
            <div className="px-4 my-5  rounded-3 cartbg" key={cartItem.id}>
                <div className="container py-4">
                    <button onClick={()=> handleClose(cartItem)} className='btn-close float-end' aria-label='close'></button>
                    <div className="row d-flex justify-content-center">
                        <div className="col-6">
                            <img src={cartItem.img} alt={cartItem.title} height='200px' width='200px' />
                        </div>
                        <div className="col-md-4">
                            <h3 className='titleCP'> {cartItem.title} </h3>
                            <p className='lead fw-bold'>Precio: $ {cartItem.price} </p>
                            <p className='lead fw-bold'> Presentación: {cartItem.presentation} </p>
                            <p className='lead fw-bold'> Marca: {cartItem.brand} </p>
                        </div>

                    </div>
                </div>

                
            </div>

            
        )
    }

    const emptyCart = () => {
        return (
            <div className='px-4 my-5 bg-light rounded-3 py-5 '>
                <div className='container py-4 '>
                    <div className="row">
                        <h3>Tu carrito esta vacio</h3>
                    </div>

                </div>
            </div>
        )
    }

    const button = () => {
        return (
            <div className="container">
                <div className="row">
                    <NavLink to='/comprar'  className='text-center link2'>Proceder a comprar</NavLink>
                </div>
            </div>
        )
    }
   

  return (
      <div>
          {state.length === 0 && emptyCart()}
          {state.length !== 0 && state.map(cartItems)}
          {state.length !== 0 && button()}
          

          <div className='container mt-5'>
              <div className="row mb-5">
                  <h3 className='text-center mb-3'>Seguir comprando</h3>
                  <div className='col-lg-12 justify-content-md-center col-md-4 d-flex justify-content-evenly align-items-center flex-wrap gap-3'>
                      <div className='  '>
                          <NavLink to='/decoracion' className='link2'>Decoraciones</NavLink>
                      </div>
                      <div className='  ' >
                          <NavLink to='/moldes' className='link2' >Moldes y cajas</NavLink>
                      </div>
                      <div className=''>
                          <NavLink to='/masas' className='link2' >Masas y cubiertas</NavLink>
                      </div>
                  </div>
              </div>
          </div>
      
    </div>
  )
}

export default Cart
