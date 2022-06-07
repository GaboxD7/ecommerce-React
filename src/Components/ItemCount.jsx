import React from 'react';
import { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({value, max, onAdd}) => {
    console.log(value)

const [count, setCount] = useState(value);

const restar = () => { 

count > value ?  setCount(count - 1) : alert('No puedes quitar mas productos')
}
const sumar = () => {
    if (count < max) {
        setCount(count + 1);
    } else {
        alert('No puedes add mas producto');
    }
 
}
const reset = () => {
    setCount(value);
}
  return (
      <>
          <div className='contenedor-count'>
              <div className='contenedor-btn-count'>
                  <button 
                  onClick={restar}>-</button> 
                  <h2>{count}</h2>
                  <button 
                  onClick={sumar}>+</button>
              </div>
                  <button 
                     className='btn-agregar'
                     onClick={() => {onAdd(count); reset() }  }
         
                     >AGREGAR AL CARRITO
                </button>
          </div>
      </>

  )
}

export default ItemCount;