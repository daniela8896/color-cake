import React from 'react'
import FormContact from '../../components/form/FormContact'

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

     <FormContact />

    </div>
  )
}

export default contact