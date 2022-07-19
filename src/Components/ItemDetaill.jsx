import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react'
import Zoom  from 'react-img-zoom'
import ItemCount from './ItemCount'
import './ItemDetaill.css'
import { CartContext } from './context/CartContext';
import { useContext } from 'react';

const ItemDetaill = ({item}) => {

  const [quantities, setQuantities] = useState(0)
  // Consumiendo  Provider
  const { isInCart, addItem } = useContext(CartContext)

  const onAdd = (count) => {
  
    setQuantities(count)
      
      alert(`Agregaste ${count} productos `)
      isInCart(item.id)
      addItem(item, count )  

    }
  


const {price, color, brand, model, category, weight, image, cantidad} = item

  return (
    window.screen.width > 992 ?
      <section className='container '>
        <section className=''>

        
        <div className='row g-0 m-lg-5 p-5 m-md-2' >
          <div className='col-lg-6 col-md-12 col-sm-12 img-detalle'>
            <div>
              <Zoom
                img={image}
                zoomScale={3}
                width={850}
                height={500}
                transitionTime={0}
                />
            </div>
          </div>
          <div className='col-lg-6 col-md-12 col-sm-12'>
              {/* <div className='container-col-detail'> */}
                 <div className='container-card-detail'>
                       <div>
                          <div><h1>{brand} {model}</h1></div>
                          <div><p>Categoria: {category}</p></div>
                       </div>
                      <h2>$ {price}</h2>
                      <h6>Color: {color}</h6>
                      <h6>Peso: {weight} Kg</h6>
                        {quantities > 0 ?  <div className='container-terminar'><Link to={'/cart'} className="terminar-compra">Terminar mi compra</Link></div>  : <ItemCount cantidad={cantidad} inicial={1} onAdd={onAdd} />}
                  </div>
              {/* </div> */}
             </div>
            </div>
            </section>
      </section>

   : 

   <section className='container '>
   <section className=''>

   
   <div className='row g-0 m-lg-5 m-sm-5 p-5 m-md-2' >
     <div className='col-lg-6 col-md-12 col-sm-12 img-detalle'>
       <div>
          <img src={image} height={300} alt="" />
       </div>
     </div>
     <div className='col-lg-6 col-md-12 col-sm-12'>
         {/* <div className='container-col-detail'> */}
            <div className='container-card-detail'>
                  <div>
                     <div><h1>{brand} {model}</h1></div>
                     <div><p>Categoria: {category}</p></div>
                  </div>
                 <h2>$ {price}</h2>
                 <h6>Color: {color}</h6>
                 <h6>Peso: {weight} Kg</h6>
                   {quantities > 0 ?  <div className='container-terminar'><Link to={'/cart'} className="terminar-compra">Terminar mi compra</Link></div>  : <ItemCount cantidad={cantidad} inicial={1} onAdd={onAdd} />}
             </div>
         {/* </div> */}
        </div>
       </div>
       </section>
 </section>
  )
}


export default ItemDetaill