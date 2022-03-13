import React from 'react'
import { useParams } from 'react-router-dom'
import { datosDecoracion } from '../../data/DatosProductos'





const DetailsDeco = () => {
  const proid = useParams();
  const detailProducts = datosDecoracion.filter(item => item.id == proid.id);
  const product = detailProducts[0];
  

  console.log(product)


  return (


    <div>

      <div className='container'>

        <h1> {product.title} </h1>

        <div className="card">
          <div className="col-md-4">
            <img src={product.img} className="img-fluid rounded-start" alt={product.nombre} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <p className="card-text">Marca: {product.brand} </p>
              <p className="card-text">Presentación: {product.presentation} </p>
              <p className="card-text">Precio: {product.price} </p>
            </div>
          </div>
        </div>

        <h2>Descripcioń</h2>
        <p className=''> {product.description} </p>


      </div>
    </div>

  )

}

export default DetailsDeco