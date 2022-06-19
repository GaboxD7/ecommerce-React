import React, { useEffect, useState } from 'react'
import './ItemListContainer.css' 
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'



const ItemListContainer = () => {
  const {id} = useParams();
  const [bikes, setBikes] = useState([])
  const [resultado, setResultado] = useState();



  useEffect(() => {


    setTimeout(() => {
      
      
    fetch('../../productos.json')
    
    .then(res => res.json())
    .then(data => setBikes(data.productos))
    .catch(error => console.error('Error', error))
    
     }, 200);
 
  }, [])

  useEffect(() => {
    !id ? setResultado(bikes) : setResultado(bikes.filter((bike) => bike.category  === id))

  // if(id) {
  //   let filtrados = 
  //   setResultado(filtrados)
  // }
     

  },[id, bikes])

  return (

    <>
      <div className='container'>
       <div className='row justify-content-center flex-wrap' >
       <ItemList bikes={resultado}  /> 
     
       </div>
          
        
      </div>
     
    </>
        
    )   

}

export  default ItemListContainer