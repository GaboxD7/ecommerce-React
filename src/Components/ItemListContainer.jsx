import React, { useEffect, useState } from 'react'
import './ItemListContainer.css' 
import ItemList from './ItemList'


const ItemListContainer = ({greting}) => {

  const [bikes, setBikes] = useState([])


  useEffect(() => {


    setTimeout(() => {
      
      
    fetch('https://rickandmortyapi.com/api/character')
    
    .then(res => res.json())
    .then(res => setBikes(res.results))
    .catch(error => console.error('Error', error))
     }, 2000);
  }, [])




console.log(bikes)


  return (

    <div className='container-card'>
      <div className='container '>
       <div className='row flex-row' >
       <ItemList bikes={bikes} />
       </div>
          
        
      </div>
     
    </div>
        
    )   

}

export  default ItemListContainer