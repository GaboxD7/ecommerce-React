import React, { useEffect, useState } from 'react'
import './ItemListContainer.css' 
import ItemList from './ItemList'


const ItemListContainer = () => {

  const [bikes, setBikes] = useState([])

  useEffect(() => {


    setTimeout(() => {
      
      
    fetch('./productos.json')
    
    .then(res => res.json())


    .then(data => setBikes(data.productos))
    .catch(error => console.error('Error', error))
    
     }, 3000);
 
  }, [])

  return (

    <>
      <div className='container'>
       <div className='row justify-content-center flex-wrap' >
       <ItemList bikes={bikes} />
       </div>
          
        
      </div>
     
    </>
        
    )   

}

export  default ItemListContainer