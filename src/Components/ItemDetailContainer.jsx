import React, { useEffect, useState } from 'react'
import ItemDetaill from './ItemDetaill'


const ItemDetailContainer = () => {
    const [item, setItem] = useState([])

    useEffect(() => {
  
  
      // setTimeout(() => {
        
        
      fetch('./productos.json')
      
      .then(res => res.json())
      .then(data => setItem(data.productos[0]))
      .catch(error => console.error('Error', error))
      
      //  }, 2000);
   
    }, [])

console.log(item)
    
  return (
    <ItemDetaill item={item} />
  )
}












export default ItemDetailContainer