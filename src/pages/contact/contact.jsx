import React from 'react'
import FormContact from '../../components/form/FormContact'
import instagram from '../../img/instagram.png'
import facebook from '../../img/facebook.png'
import whatsapp from '../../img/whatsapp.png'

const contact = () => {
  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col text-center">
            <h1 className='h1 cl' >Comunicate con nosotros</h1>
            <hr className='hr' />
          </div>
        </div>
      </div>


      <div className="container py-5">
        <div className="row">
          <div className="col text-center">
            <h3 className='h1 cl' >¡Buscanos en redes sociales!</h3>
            <hr className='hr' />
          </div>
        </div>
      </div>

      <div className="container  ">
        <div className='row d-flex justify-content-center  align-items-center mb-5'>
          <div className='col-md-4 col-sm-12 d-flex align-items-center mb-5 justify-content-center'>
            <a href='https://www.instagram.com/colorcakeenvigado/?hl=es-la'> <img src={instagram} alt="foto" width='100px' /></a>

          </div>
          <div className='col-md-4 col-sm-12 d-flex align-items-center mb-5 justify-content-center'>
            <a href='https://es-la.facebook.com/pages/category/Grocery-Store/color-cake-2240539145973092/'><img src={facebook} alt="foto" width='100px' /> </a>

          </div>
          <div className='col-md-4 col-sm-12 d-flex align-items-center mb-5 justify-content-center'>
            <a href='https://api.whatsapp.com/send?phone=573012862612&text=Hola,%20quiero%20%20mas%20informaci%C3%B3n%20de%20los%20productos?'> <img src={whatsapp} alt="foto" width='100px' /> </a>

          </div>
        </div>
      </div>


      <FormContact />



    </div>
  )
}

export default contact