import React from 'react'
import './About.css'
import color2 from '../../img/color2.jpg'

const About = () => {
  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col text-center">
            <h1 className='h1 cl' >Nosotros</h1>
            <hr className='hr' />
          </div>
        </div>
      </div>


      <div className='container my-5'>
        <div className='row d-flex justify-content-center align-items-center'>
          <div className='col-sm-12 col-md-6 '>
            <img src={color2} alt="Colorcake" className='imgCategory' />
          </div>
          <div className='col-sm-12 col-md-6'>
            <p className='text'>Somos una empresa dedicada 100% a la venta de insumos, utensilios y empaques para reposteria, impresiones 100% full color, chocolates personalizados, detalles para toda ocasión! y muchas cosas mas...</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About