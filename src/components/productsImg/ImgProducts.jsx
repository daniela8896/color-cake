import React from 'react'
import './imgProducts.css'
import niñacocinando from '../../assets/varias/niñacocinando.jpg'
const ImgCategory = () => {
  return (
    <div>
      <div className='container my-5'>
        <div className='row d-flex justify-content-center align-items-center'>
        <div className='col-sm-12 col-md-6 '>
          <img src={niñacocinando} alt="Colorcake" className='imgCategory' />
        </div>
        <div className='col-sm-12 col-md-6'>
          <p className='text'>Moldes de tortas, grajeas, colorantes, capacillos, saborizantes, cajas y empaques, cortadores , entre otros!!! Todo en insumos para reposteria.</p>
        </div>

        </div>
      </div>
    </div>
  )
}

export default ImgCategory