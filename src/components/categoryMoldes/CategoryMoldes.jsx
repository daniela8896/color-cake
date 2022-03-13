import React from 'react'
import CardMoldes from './CardMoldes'
import datosMoldes from '../../data/DatosMoldes'
import Nav from '../nav/Nav'
import ImgCategory from '../imgCategory/ImgCategory'
import './cardMoldes.css'
import ButtonSearch from '../../components/Buttons/ButtonSearch'
import DropdownCategory from '../dropdown/DropdownCategory'

const CategoryMoldes = () => {
    return (
        <div>
           

            <div className="container py-5">
                <div className="row">
                    <div className="col text-center">
                        <h1 className='h1-moldes mb-4' >Moldes y cajas</h1>
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
                    {datosMoldes.map((producto) => {
                        return (
                            <div className="col-sm-12 col-lg-3 col-md-4 mb-5" key={producto.id}>
                                <CardMoldes
                                    id={producto.id}
                                    nombre={producto.title}
                                    img={producto.img}
                                    price={producto.price}
                                    presentation={producto.presentation}
                                />
                            </div>
                        )
                    })}
                </div>

            </div>





        </div>
    )

}

export default CategoryMoldes