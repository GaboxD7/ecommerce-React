import React, { useEffect, useState } from "react";
import ItemDetaill from "./ItemDetaill";
import { useParams } from "react-router-dom";
// import ItemList from './ItemList';
import { doc, getDoc, getFirestore } from 'firebase/firestore'
 
const ItemDetailContainer = () => {
  const {id} = useParams()
  const [item, setItem] = useState();
  const [loanding, setLoading] = useState(true);
  const [error, setError] = useState(false);
  //  const [result, setResult] = useState()

  useEffect(() => {
      const db = getFirestore()
      const productoRef = doc(db, 'productos', id)

      getDoc(productoRef).then((prodDetalle) => {
        setItem({ ...prodDetalle.data(), id: prodDetalle.id});
      }).catch((error) => {
        setError(error)
      }).finally(() => {
        setLoading(false)
      })





    // setTimeout(() => {

    // fetch('../../productos.json')
    //   .then((res) => res.json())
 
    //   .then((data) => setItem(data.productos.find(prod => prod.id === parseInt(id))))


    //   .catch((error) => console.error("Error", error));

    //  }, 1000);
  }, [id]);





return  (
          <>
            {loanding &&  <div className='text-center d-flex justify-content-center align-items-center vh-100'>
            <div className="loading">
              <div className="d1"></div>
              <div className="d2"></div>
            </div>
            </div> }
           { item && <ItemDetaill item={item}/>}
          </>
)



};

export default ItemDetailContainer;