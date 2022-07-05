import React from 'react'
import './Item.css'
 import { useState } from 'react';
 import {Link } from "react-router-dom"


const Item = ({bike}) => {


  const {name, image, brand, model, price, id, category } = bike

  return (
    <div className='col-10 col-sm-6 col-md-4 col-lg-3'>
      <div className="cardd">
      <p className='p-categoria text-center'>CATEGORIA: {category}</p>
      <Link to={`/item/${id}`}> <img src={image} alt="Avatar"  /></Link>
       
          <div className="container-contenido">
            {/* <h6><b>{name}</b></h6> */}
            <h6 className='precio-model'>Precio: {` $ ${price} `} </h6>
            <p className='p-model'>{brand} {model}</p>
           
          </div>
            <Link to={`/item/${id}`} className="btn-ver text-center">VER DETALLES</Link>
      </div>
    </div>
  

  )
}

export default Item