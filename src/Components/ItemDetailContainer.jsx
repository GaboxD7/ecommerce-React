import React, { useEffect, useState } from "react";
import ItemDetaill from "./ItemDetaill";
import { useParams } from "react-router-dom";
// import ItemList from './ItemList';

const ItemDetailContainer = () => {
  const {id} = useParams()
  const [item, setItem] = useState();
  //  const [result, setResult] = useState()

  useEffect(() => {
    // setTimeout(() => {

    fetch('../../productos.json')
      .then((res) => res.json())
 
      .then((data) => setItem(data.productos.find(prod => prod.id == id)))

      // .then((result => setItem(result)))
      .catch((error) => console.error("Error", error));

    //  }, 2000);
  }, [id]);





return item && <ItemDetaill item={item}/>

};

export default ItemDetailContainer;