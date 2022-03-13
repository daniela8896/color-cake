import React from 'react'
import CardProducts from '../../components/cardProduct/CardProducts'
import { datosDecoracion, datosMasas, datosMoldes } from '../../data/DatosProductos'
import { NavLink } from "react-router-dom";
import './Products.css'
import Nav from '../../components/nav/Nav';
import ImgProducts from '../../components/productsImg/ImgProducts';
import ButtonSearch from '../../components/Buttons/ButtonSearch';
import DropdownCategory from '../../components/dropdown/DropdownCategory';



const Products = () => {



  return (
   

    <div>
 

     

      <div className="container py-5">
        <div className="row">
          <div className="col text-center">
            <h1 className='h1-productos' >Productos</h1>
            <hr className='hr' />
          </div>
        </div>
      </div>

      <ImgProducts />

      <div className='container m-5'>
        <div className='row'>
          <div className='col-6'>
             <ButtonSearch />
          </div>
          <div className='col-6 d-flex align-items-center justify-content-end'>
             <DropdownCategory />
          </div>
        </div>
      </div>

     

      <div className='container'>
        <div className="row">
          <div className='text-center mb-5'><h1>Decoración</h1></div>
          {datosDecoracion.map((productoDeco) => {
            return (
              <div className="col-sm-12 col-lg-3 col-md-4 mb-5">
                <CardProducts
                  key={productoDeco.id}
                  nombre={productoDeco.title}
                  img={productoDeco.img}
                  price={productoDeco.price}
                  presentation={productoDeco.presentation}
                />
              </div>
            )
          })}

          <div className='text-center mb-5 mt-3'>
            <div>
              <NavLink className='seeMore' to='/decoracion' >Ver mas...</NavLink>
            </div>
          </div>
        </div>

      </div>

      <div className='container'>
        <div className="row">
          <div className='text-center mt-5 mb-5'><h1>Masas y cubiertas</h1></div>
          {datosMasas.map((productoMasa) => {
            return (
              <div className="col-sm-12 col-lg-3 col-md-4 mb-5">
                <CardProducts
                  key={productoMasa.id}
                  nombre={productoMasa.title}
                  img={productoMasa.img}
                  price={productoMasa.price}
                  presentation={productoMasa.presentation}
                />
              </div>
            )
          })}
          <div className='text-center mb-5 mt-3'>
            <div>
              <NavLink className='seeMore' to='/masas' >Ver mas...</NavLink>
            </div>
          </div>
        </div>

      </div>

      <div className='container'>
        <div className="row">
          <div className='text-center mt-5 mb-5'><h1>Moldes y cajas</h1></div>
          {datosMoldes.map((productoMolde) => {
            return (
              <div className="col-sm-12 col-lg-3 col-md-4 mb-5">
                <CardProducts
                  key={productoMolde.id}
                  nombre={productoMolde.title}
                  img={productoMolde.img}
                  price={productoMolde.price}
                  presentation={productoMolde.presentation}
                />
              </div>
            )
          })}
          <div className='text-center mb-5 mt-3'>
            <div>
              <NavLink className='seeMore' to='/moldes' >Ver mas...</NavLink>
            </div>
          </div>
        </div>

      </div>





    </div>
  )
}

export default Products