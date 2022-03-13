import React from 'react'
import './ImgCategory.css'
import tizaColor from '../../assets/varias/color1.jpg'

const ImgCategory = () => {
  return (
    <div>
      <div className='container my-5'>
        <div className='row d-flex justify-content-center align-items-center'>
        <div className='col-sm-12 col-md-6 '>
          <img src={tizaColor} alt="Colorcake" className='imgCategory' />
        </div>
        <div className='col-sm-12 col-md-6'>
          <p className='text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora ea dicta distinctio qui magni expedita pariatur quidem esse, ipsam beatae dolores ab ex, eius voluptates consequatur laboriosam quis minima corrupti.</p>
        </div>

        </div>
      </div>
    </div>
  )
}

export default ImgCategory