import React from 'react'
import { useParams } from 'react-router-dom'
import DatosMasas from '../../data/DatosMasas'

import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem, delItem } from '../../redux/actions/index'
import Nav from '../nav/Nav'





const DetailsDeco = () => {
  const [cartBtn, setCartBtn] = useState('Añadir al carrito')

  const proid = useParams();
  const detailMasas = DatosMasas.filter(item => item.id == proid.id);
  const product = detailMasas[0];

  console.log(product)

  const dispatch = useDispatch()

  const handleCart = (product) => {
    if (cartBtn === 'Añadir al carrito') {
      dispatch(addItem(product))
      setCartBtn('Quitar del carrito')
    }
    else {
      dispatch(delItem(product))
      setCartBtn('Añadir al carrito')
    }
  }



  return (


    <div>

     

      <div className='container mt-5'>

        <h1 className='text-center mb-4'> {product.title} </h1>

        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-sm-12 col-md-6">
              <img src={product.img} className='imgCategory' alt={product.nombre} />
            </div>
            <div className="col-sm-12 col-md-6 ">
              <div className="card-body d-flex flex-column align-items-center">
                <p className="card-text fs-3">Marca: {product.brand} </p>
                <p className="card-text fs-3">Presentación: {product.presentation} </p>
                <p className="card-text fs-3">Precio: $ {product.price} </p>
              </div>
            </div>
          </div>

        </div>
        <div className='d-flex flex-column'>

          <h2 className='my-5'>Descripción</h2>
          <p className='fs-3'> {product.description} </p>

          <button className='btnAñadir mb-5' onClick={() => handleCart(product)} > <box-icon name='cart-add'></box-icon> {cartBtn} </button>
        </div>


      </div>
    </div>
  )

  

}

export default DetailsDeco