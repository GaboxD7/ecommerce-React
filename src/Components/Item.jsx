import React from 'react'
import './Item.css'

// import ItemList from './ItemList'


const Item = ({bike}) => {
  console.log(bike)
  const {name, image, species, status} = bike
console.log(image)
  return (
    <div className='col-12 col-sm-6 col-md-6 col-lg-3'>
        <div className="cardd">
        <img src={image} alt="Avatar"  />
        <div className="container-contenido">
        <h6><b>{name}</b></h6>
        <p>Estado: {status}</p>
        <p>Especie: {species}</p>
    </div>

  </div>
    </div>


  )
}

export default Item