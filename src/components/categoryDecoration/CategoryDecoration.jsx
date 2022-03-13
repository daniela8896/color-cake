import React from 'react'
import CardDecoration from './CardDecoration'
import datosDecoracion from '../../data/DatosDecoracion'
import ImgCategory from '../imgCategory/ImgCategory'
import './cardDecoration.css'
import ButtonSearch from '../../components/Buttons/ButtonSearch'
import DropdownCategory from '../dropdown/DropdownCategory'



const CategoryDecoration = () => {
  return (
      <div>
         
          <div className="container py-5">
              <div className="row">
                  <div className="col text-center">
                      <h1 className='h1-decoration' >Decoración</h1>
                      <hr className='hr' />
                  </div>
              </div>
          </div>

          <ImgCategory />

          <div className='container py-5'>
              <div className='row'>
                  <div className='col-sm-12 col-md-6'>
                      <ButtonSearch />
                  </div>
                  <div className='col-sm-12 col-md-6 d-flex align-items-center justify-content-end'>
                      <DropdownCategory />
                  </div>
              </div>
          </div>

          <div className='container'>
              <div className="row">
                  {datosDecoracion.map((productoDeco) => {
                      return (
                          <div className="col-sm-12 col-lg-3 col-md-4 mb-5" key={productoDeco.id}>
                              <CardDecoration
                                  item={productoDeco}
                                  id={productoDeco.id}
                                  nombre={productoDeco.title}
                                  img={productoDeco.img}
                                  price={productoDeco.price}
                                  presentation={productoDeco.presentation}
                                  
                              />
                          </div>
                      )
                  })}
              </div>

          </div>





      </div>
  )
  
}

export default CategoryDecoration