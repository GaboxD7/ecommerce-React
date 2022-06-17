import React from 'react'
import { useState } from 'react';
import './ItemCount.css'
const ItemCount =  ({cantidad, inicial}) => {

    const [count, setCount] = useState(inicial);
    const [stock, setStock] = useState(cantidad)
    
    const restar = () => { 
    
    count > inicial ?  setCount(count - 1) : alert('No puedes quitar mas productos');
  
    }
  
    const sumar = () => {
  
        if (count < stock) {
            setCount(count + 1);
        } else {
            alert('No puedes add mas producto');
        }
     
    }
    const reset = () => {
        setCount(inicial);
    }
  // const validarAgregar = () => {
  
  // return cantidad > count
  // }
  
  
  const onAdd = (count) => {
  
    // 
      if( stock > 0 ) {
      alert(`Agregaste ${count} productos `)
      setStock(stock - count)
      } else {
  
       alert(`No che pede `)
      }
  
      
    }
  

        // <div className='container-add-carro'>
        //         <div className='container-boton'>
        //           <button>-</button>
        //           <h2>1</h2>
        //           <button>+</button>
        //         </div> 
      //   <div className='agregar'>
      //   <button>AGREGAR AL CARRITO</button>
      // </div>

  return (
          <div className='contenedor-count'>
                <div className='container-boton'>
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
  )
}

export default ItemCount