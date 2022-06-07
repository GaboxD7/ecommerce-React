import React, { useEffect, useState } from 'react'
import './ItemListContainer.css' 
import ItemList from './ItemList'
const ItemListContainer = ({greting}) => {

  const [bike, setBike] = useState([])


  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
    
    .then(res => res.json())
    .then(res => setBike(res.results))
    .catch(error => console.error('Error', error))

  }, [])
  
console.log(bike)
  return (
          <ItemList></ItemList>
    )   
}

export  default ItemListContainer