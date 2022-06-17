import React from 'react'
import './Item.css'
 import { useState } from 'react';
 import {Link } from "react-router-dom"


const Item = ({bike}) => {


  const {name, image, brand, model, price, id } = bike

  return (
    <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
      <div className="cardd">
        <img src={image} alt="Avatar"  />
          <div className="container-contenido">
            <h6><b>{name}</b></h6>
            <p>Precio: {` $ ${price} `} </p>
            <p>{brand} {model}</p>
          </div>
            <Link to={`/item/${id}`} className="btn-ver text-center">VER DETALLES</Link>
      </div>
    </div>
  

  )
}

export default Item