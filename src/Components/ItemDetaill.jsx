import React from 'react'
import Zoom from 'react-img-zoom'
import './ItemDetaill.css'

const ItemDetaill = ({item}) => {

// console.log(imagenBike)
const {price, color, brand, model, category, weight, image} = item

  return (

      <section className='container'>
        <div className='row container-detail'>
          <div className='col-5 img-detalle'>
          <Zoom
              img={"/images/trek-powerfly-4-2022-.jpg"}
              zoomScale={3}
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
            <div className='container-add-carro'>
                <div className='container-boton'>
                  <button>-</button>
                  <h2>1</h2>
                  <button>+</button>
                </div>
                <div className='agregar'>
                  <button>AGREGAR AL CARRITO</button>
                </div>
            </div>
            </div>


          
          </div>
        </div>
      </section>

   
  )
}


export default ItemDetaill