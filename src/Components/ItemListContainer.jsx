//@test
import React, { useEffect, useState } from 'react'
import './ItemListContainer.css' 
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'



const ItemListContainer = () => {
    const [loanding, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const [bikes, setBikes] = useState([])
    const {id} = useParams();

      useEffect(() => {
    // metodo getFirestore() donde solititamos el db de firebase
    const db = getFirestore()
    // Metodo collection espesificamos la bd y collecion a traer
    const productosColeccion = collection(db, 'productos' );
    // Metodo getDocs para traer la collecion

        if (id) {
          const q = query(productosColeccion, where('category', '==' , id))
          getDocs(q).then(documentos => {
            setBikes(documentos.docs.map(doc => ({...doc.data(), id: doc.id})))
          })
          .catch((error) => {
            setError(error)
          })
          .finally(() => {
            setLoading(false)
          })
      
        } else {
          getDocs(productosColeccion)
          .then(documentos => {
          setBikes(documentos.docs.map(doc => ({...doc.data(), id: doc.id})))
          })
          .catch((error) => {
            setError(error)
          })
          .finally(() => {
            setLoading(false)
          })
        }



 
  }, [id])








  return (

    <>
    {loanding && 
     <div className='text-center d-flex flex-column justify-content-center align-items-center vh-100'>
          <div className="loading">
              <div className="d1"></div>
              <div className="d2"></div>
          </div>
          <p className='color-p'>Loading...</p>
    </div> }
      <div className='container'>
          <div className='row justify-content-center flex-wrap' >
               <ItemList bikes={bikes}  /> 
          </div>       
      </div>
     
    </>
        
    )   

}

export  default ItemListContainer