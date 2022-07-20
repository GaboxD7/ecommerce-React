import React from 'react'
import { useState } from 'react';
import './ItemCount.css'

const ItemCount =  ({cantidad, inicial, onAdd}) => {

    const [count, setCount] = useState(inicial);
    const [stock, setStock] = useState(cantidad)
 
    const restar = () => { 
    
    count > inicial &&  setCount(count - 1) ;
  
    }
  
    const sumar = () => {
  
        if (count < stock) {
            setCount(count + 1);
        } else {
          
        }
     
    }
    const reset = () => {
        setCount(inicial);
    }

  return (
    onAdd !== undefined ?
          <div className='contenedor-count'>
                <div className='container-boton container-boton-lista'>
                    <button 
                    onClick={restar}>-</button> 
                    <h2>{count}</h2>
                    <button 
                    onClick={sumar}>+</button>
                </div>
                <div className='agregar'>
                    <button 
                      //  disabled={validarAgregar()}
                       onClick={() => {onAdd(count);  reset() }  }
      
                       >AGREGAR AL CARRITO
                  </button>
            </div> 
            </div> 
            :         <div className='contenedor-count'>
                      <div className='container-boton'>
                <button 
                onClick={restar}>-</button> 
                <h2>{count}</h2>
                <button 
                onClick={sumar}>+</button>
            </div>
            </div>
  )
}

export default ItemCount