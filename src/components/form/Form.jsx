import React from 'react'
import './Form.css'
import { Formik } from 'formik'
import { useState } from 'react'



const Form = () => {
  const sendMessage = () => {
    
  }

  const [formularioEnviado, cambiarFormularioEnviado] = useState(false)

  return (
    <>
      <Formik
        initialValues={
          {
            nombre: '',
            correo: '',
            telefono: ''
          }
        }
        validate={(valores) => {
          let errores = {}

          //validacion nombre
          if (!valores.nombre) {
            errores.nombre = 'Por favor ingresa un nombre'
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
            errores.nombre = 'El nombre solo puede contener letras y espacios'
          }
          if (!valores.telefono) {
            errores.telefono = 'Por favor ingresa un numero de telefono'
          }

          //validacion correo
          if (!valores.correo) {
            errores.correo = 'Por favor ingresa un correo'
          } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)) {
            errores.correo = 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo'
          }

          return errores
        }}

        onSubmit={(valores, { resetForm }) => {

          resetForm()
          console.log(valores)
          cambiarFormularioEnviado(true)
          setTimeout(() => cambiarFormularioEnviado(false), 5000)
          
         


        }}
      >
        {({ values, handleSubmit, handleChange, handleBlur, errors, touched }) => (

          <form onSubmit={handleSubmit} className='container d-flex flex-column align-items-center gap-4 card mt-5 cardForm'>
            <h2 className='my-3'>Datos de envio</h2>
            <h3 className=''>Datos personales</h3>
            <div className=''>
              <label htmlFor="nombre" className='me-4'>Nombre completo:</label>
              <input
                type="text"
                id='nombre'
                placeholder='Escribe tu nombre completo'
                name='nombre'
                className='btnAñadirInput'
                value={values.nombre}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.nombre && errors.nombre && <div className='error'> {errors.nombre} </div>}
            </div>
            <div>
              <label htmlFor="numero" className='me-2'>Numero de contacto:</label>
              <input
                type="text"
                id='nombre'
                placeholder='Escribe un numero de contacto'
                name='telefono'
                className='btnAñadirInput'
                value={values.telefono}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.telefono && errors.telefono && <div className='error'> {errors.telefono} </div>}
            </div>
            <div>
              <label htmlFor="nombre" className='me-2'>Direccion de entrega:</label>
              <input
                type="text"
                id='nombre'
                name='correo'
                placeholder='Escribe tu correo'
                className='btnAñadirInput'
                value={values.correo}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.correo && errors.correo && <div className='error'> {errors.correo} </div>}
            </div>
            <button
              type='submit'
              className='btnAñadir mb-5'
            >Finalizar compra</button>
            {formularioEnviado && <p>Formulario enviado con exito</p>}
          </form>

        )}

      </Formik>



    </>
  )
}

export default Form