import React from 'react'
import Carousel from './carousel/Carousel'
import { NavLink } from 'react-router-dom'
import panaderia from '../img/panaderia.png'
import horno from '../img/horno.png'
import ProductsMas from './ProductsMas'
import { datosDecoracion } from '../data/DatosProductos'
import CardProducts from '../components/cardProduct/CardProducts'



const Home = () => {
  return (
    <div>

     


      <div className="container py-5">
        <div className="row">
          <div className="col text-center">
            <h1 className='h1 cl2' >Bienvenidos</h1>
            <hr className='hr' />
          </div>
        </div>
      </div>

      

      <Carousel />

      <div className='container mt-5'>
        <div className="row ">
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

      <div className="container my-5">
        <div className="row">
          <div className="col d-flex align-items-center justify-content-center">
            <img src={panaderia} alt="panaderia" width='50px' />
            <h2>Productos mas vendidos</h2>
          </div>
        </div>
      </div>

      <ProductsMas />

      <div className='container'>

        <div className="container my-5">
          <div className="row">
            <div className="col d-flex align-items-center justify-content-center">
              <img src={panaderia} alt="panaderia" width='50px' />
              <h2>Lo nuevo</h2>
            </div>
          </div>
        </div>
        
        <div className='container'>
          <div className="row new">
            <div className='text-center mb-5'></div>
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

          </div>
        </div>

      </div>


      <div className='container my-5'>
        <div className='row d-flex justify-content-center align-items-center'>
          <div className='col-sm-12 col-md-6 '>
            <img src={horno} alt="Colorcake" className='imgCategory' width='50px' />
          </div>
          <div className='col-sm-12 col-md-6'>
            <p className='text'>Pregunta por nuestras impresiones comestibles, 100% calidad.</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home