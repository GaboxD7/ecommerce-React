import React from 'react'
import './Item.css'
 import { useState } from 'react';



const Item = ({bike, value}) => {



  const [count, setCount] = useState(value);
  const [max, seTmax] = useState(bike.cantidad)
  
  const restar = () => { 
  
  count > value ?  setCount(count - 1) : alert('No puedes quitar mas productos');

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
// const validarAgregar = () => {

// return max > count
// }


const onAdd = (count) => {

  // 
    if(max > 0) {
    alert(`Agregaste ${count} productos `)
    seTmax(max -count)
    } else {

     alert(`No che pede `)
    }

    
  }


  const {name, image, brand, model, price, } = bike
console.log(image)
  return (
    <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
      <div className="cardd">
        <img src={image} alt="Avatar"  />
          <div className="container-contenido">
            <h6><b>{name}</b></h6>
            <p>Precio: {` $ ${price} `} </p>
            <p>{brand} {model}</p>
          </div>
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
                      //  disabled={validarAgregar()}
                       onClick={() => {onAdd(count);  reset() }  }
           
                       >AGREGAR AL CARRITO
                  </button>
            </div>
      </div>
    </div>
  

  )
}

export default Item