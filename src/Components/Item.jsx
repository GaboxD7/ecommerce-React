import React from 'react'
import './Item.css'
 import { useState } from 'react';
 import Banner from './Banner';

 import {Link } from "react-router-dom"


const Item = ({bike}) => {


  const {name, image, brand, model, price, id, category } = bike

  return (
    <>
  
    <div className='col-10 col-sm-6 col-md-4 col-lg-3'>
      <div className="cardd">
        <div >
        <Link to={`/item/${id}`} className='mostrar-img'> <img className='imagen-item' src={image} alt="Avatar"  /> <p className='p-model'>{brand} {model}</p></Link>
        </div>
      {/* <p className='p-categoria text-center'>CATEGORIA: {category}</p> */}

       
          <div className="container-conteido">
            {/* <h6><b>{name}</b></h6> */}
           
            <h6 className='precio-model'>Precio: {` $ ${price} `} </h6>
           
           
          </div>
            <Link to={`/item/${id}`} className="btn-ver text-center">VER DETALLES</Link>
      </div>
    </div>
    </>

  )
}

export default Item