import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react'
import Zoom  from 'react-img-zoom'
import ItemCount from './ItemCount'
import './ItemDetaill.css'
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';

const ItemDetaill = ({item}) => {

  const [quantities, setQuantities] = useState(0)
  // Consumiendo  Provider
  const { isInCart, addItem } = useContext(CartContext)

  const onAdd = (count) => {
  
    setQuantities(count)
      
      alert(`Agregaste ${count} productos `)
      isInCart(item.id)
      addItem(item, count
         )
 
      

    }
  


const {price, color, brand, model, category, weight, image, cantidad} = item

  return (

      <section className='container'>
        <div className='row container-detail'>
          <div className='col-5 img-detalle'>
          <Zoom
              img={image}
              zoomScale={4}
              width={600}
              height={500}
              transitionTime={0}
              />
        
          </div>
          <div className='col-6'>
            <div className='container-card-detail'>
                            <div>
               <div><h1>{brand} {model}</h1></div>
               <div><p>Categoria: {category}</p></div>
            </div>
          
            <h2>$ {price}</h2>
            <h6>Color: {color}</h6>
            <h6>Peso: {weight} Kg</h6>
            {/* <div className='container-add-carro'>
                <div className='container-boton'>
                  <button>-</button>
                  <h2>1</h2>
                  <button>+</button>
                </div> */}
                {quantities > 0 ?  <div className='container-terminar'><Link to={'/cart'} className="terminar-compra">Terminar mi compra</Link></div>  : <ItemCount cantidad={cantidad} inicial={1} onAdd={onAdd} />}
                {/* <div className='agregar'>
                  <button>AGREGAR AL CARRITO</button>
                </div> */}
            </div>
            </div>


          
          </div>
        {/* </div> */}
      </section>

   
  )
}


export default ItemDetaill