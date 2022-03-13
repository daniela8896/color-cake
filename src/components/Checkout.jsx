import React from 'react'
import { useSelector } from 'react-redux'
import Form from './form/Form';

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

      <Form />

    </>
  )
}

export default Checkout