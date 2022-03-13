import React from 'react'
import cocoa from '../assets/productosMasas/cocoa.jpg'
import azucar from '../assets/productosMasas/azucarantihumedad-removebg-preview.png'
import flores from '../assets/productosMoldes/flores-removebg-preview.png'
import chocolate from '../assets/productosMasas/17-3-copia-removebg-preview.png'
import domos from '../assets/productosMoldes/domos-removebg-preview.png'

const ProductsMas = () => {
  return (
      <div>
          <section class="projects">
              <div class="container">
                
                  <div class="projects__grid">

                      <article class="projects__item">
                          <img src={cocoa} class="projects__img" alt='cocoa'/>
                              <div class="projects__hover">
                                  <h2 class="projects__title">Cocoa, marca santillana</h2>
                                  <i class="far fa-file-alt projects__icon"></i>
                              </div>
                      </article>

                      <article class="projects__item">
                          <img src={azucar} class="projects__img" alt='azucar'/>
                              <div class="projects__hover">
                                  <h2 class="projects__title">Azucar antihumedad, marca santillana</h2>
                                  <i class="far fa-file-alt projects__icon"></i>
                              </div>
                      </article>

                      <article class="projects__item">
                          <img src={flores} class="projects__img" alt='flores'/>
                              <div class="projects__hover">
                                  <h2 class="projects__title">Gran variedad de moldes en silicona</h2>
                                  <i class="far fa-file-alt projects__icon"></i>
                              </div>
                      </article>

                      <article class="projects__item">
                          <img src={chocolate} class="projects__img" alt='chocolate'/>
                              <div class="projects__hover">
                                  <h2 class="projects__title">Chocolate negro, marca santillana</h2>
                                  <i class="far fa-file-alt projects__icon"></i>
                              </div>
                      </article>

                      <article class="projects__item">
                          <img src={domos} class="projects__img" alt='domos'/>
                              <div class="projects__hover">
                                  <h2 class="projects__title">Domos para tus tortas</h2>
                                  <i class="far fa-file-alt projects__icon"></i>
                              </div>
                      </article>

                  </div>
              </div>
          </section> 

     </div>
  )
}

export default ProductsMas