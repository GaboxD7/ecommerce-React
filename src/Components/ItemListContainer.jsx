import React, { useEffect, useState } from 'react'
import './ItemListContainer.css' 
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar'


const ItemListContainer = () => {
  const {id} = useParams();
  const [bikes, setBikes] = useState([])
  const [resultado, setResultado] = useState();



  useEffect(() => {


    // setTimeout(() => {
      
      
    fetch('../../productos.json')
    
    .then(res => res.json())
    .then(data => setBikes(data.productos))
    .catch(error => console.error('Error', error))
    
    //  }, 3000);
 
  }, [])

  useEffect(() => {

  if(id) {
    let filtrados = bikes.filter((bike) => bike.category  === id)
    setResultado(filtrados)
  }
     

  },[id, bikes])
console.log(resultado)
  return (

    <>
      <div className='container'>
       <div className='row justify-content-center flex-wrap' >
         {resultado !== undefined ?   <ItemList bikes={resultado} /> :  <ItemList bikes={bikes}  /> }
     
       </div>
          
        
      </div>
     
    </>
        
    )   

}

export  default ItemListContainer