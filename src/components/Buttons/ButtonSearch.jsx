import React from 'react'
import './Buttons.css'
import searchIco from '../../img/magnify.png'
import DatosDecoracion from '../../data/DatosDecoracion'
import { useState } from 'react'

const ButtonSearch = () => {
const [search, setsearch] = useState('')

    return (
        <div>
            <form className=' container' >
                <div className='containerSearch' >
                    <div className='containerDosSearch'>
                        <img src={searchIco} alt="Buscar" className='imgSearch mx-2' />
                        <input
                            type='text'
                            placeholder='Buscar productos'
                            className='inputSearch'
                        />
                        <button
                            type='submit'
                            className='btnSearch '
                        >
                            Buscar
                        </button> 
                    </div>  
                    
                </div> 
                
            </form>
        </div>
    )
}

export default ButtonSearch