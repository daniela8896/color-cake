import React from 'react'
import './ImgCategory.css'
import tizaColor from '../../assets/varias/color1.jpg'

const ImgCategory = () => {
  return (
    <div>
      <div className='container my-5'>
        <div className='row d-flex justify-content-center align-items-center'>
        <div className='col-sm-12 col-md-6 '>
          <img src={tizaColor} alt="Colorcake" className='imgCategory' />
        </div>
        <div className='col-sm-12 col-md-6'>
            <p className='text'> En color cake encuentras todas las herramientas, accesorios y utensilios importados y nacionales para repostería, pastelería y mucho más…</p>
        </div>

        </div>
      </div>
    </div>
  )
}

export default ImgCategory