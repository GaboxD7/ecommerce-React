import React from 'react';
import { useState } from 'react';
import './ItemCount.css';
const ItemCount = ({value}) => {
    console.log(value)

const [count, setCount] = useState(value);

const restar = () => { 


    if ( count > 0) {
        setCount(count - 1);
    }
}
const sumar = () => {
    setCount(count + 1);
}

  return (
      <>
          <div className='contenedor-count'>
              <div className='contenedor-btn-count'>
                  <button onClick={restar}>-</button> 
                  <h2>{count}</h2>
                  <button onClick={sumar}>+</button>
                  
              </div>
              <button className='btn-agregar'>AGREGAR AL CARRITO</button>
          </div>
      </>

  )
}

export default ItemCount