import React from 'react'
import { useSelector } from 'react-redux'






const Checkout = () => {
  

  const state = useSelector((state) => state.addItem)

  let total = 0;

  const itemList = (item) => {
    total = total + item.price;
    return (
      <li className='list-group-item d-flex justify-content-between 1h-sm'>
        <div>
          <h6 className='my-0'> {item.title} </h6>

        </div>
        <span className='text-muted'>{item.price}</span>

      </li>
    )
  }

  return (
    <>



      <div className="container my-5">
        <div className="row g-5 d-flex align-items-center justify-content-center card mt-5">
          <div className="col-md-5 col-lg-4 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <h1 className="titleColor text-center">Total de la compra</h1>
              <span className="badge  circle rounded-pill"> {state.length} </span>
            </h4>
            <ul className="list-group mb-3">
              {state.map(itemList)}

              <li className="list-group-item d-flex justify-content-between">
                <span>Total:</span>
                <strong>${total}</strong>
              </li>
            </ul>


          </div>
        </div>
      </div>
      <div className='d-flex justify-content-center mb-5'>
        <a target="_blank" rel="noreferrer" href={`https://wa.me/+573012862612?text=Hola, me gustaria comprar los siguientes productos:${state.map(item => { return ("%0A%0A- *" + item.title + "* $" + item.price + " ") })}
     %0A%0AEl total de la compra sin domicilio es: $ *${total}*`}>
          <button className='btnAñadir'>Finalizar compra</button>
        </a>
     </div>
     

     

     
    </>
  )
}

export default Checkout