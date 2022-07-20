
import  React, { useContext } from 'react'
import { CartContext } from './context/CartContext'
import './Cart.css'
import ItemCount from './ItemCount'
import {Link} from 'react-router-dom';
import {RiDeleteBinLine} from 'react-icons/ri'
import {FaTruck} from 'react-icons/fa'



export default function Cart() {

  const { cart, getItemPrice, deleteItem, emptyCart  } = useContext(CartContext)

  return (
   <>
      {
        cart.length  > 0 ? (
          <section className='container bg-liht mt-3 mb-3'> 
              <section className='row ' >
                <div className="col-lg-8 col-md-12 col-sm-12" >
                    <div className='columna-cart2'>
                    <table className="table bg-light ">
                  <thead>
                        <th scope="col"  className="text-center  th-word  color-space" >IMAGEN</th>
                        <th scope="col" className="text-center  th-word  " >CANTIDAD</th>
                        <th scope="col" className="text-center th-word  " >PRODUCTOS</th>
                        <th scope="col"className="text-center  th-word " >SUB-TOTAL</th>
                        <th scope="col" className="text-center  th-word p-3 color-space" >Eliminar</th>
                  </thead>
                  <tbody>                   
                    { cart.map((item, index) => (
                          <tr key={index}>
                              <td className="padre-img">
                                <img 
                              className="hijo-img img-carro" 
                              src={item.image} 
                              alt="product" />
                              </td>
                              <td className="padre-img"><div className="hijo-img"> <p className='td-word'>{item.quantities}</p>  </div></td>
                              <td className="padre-img"><div className="hijo-img"> <p className='td-word'>{item.brand} {item.model}</p></div></td>
                              <td className="padre-img"><div className="hijo-img"><p className='td-word'>$  { item.price * item.quantities}</p></div></td>
                              <td className="padre-img"><div  className="borrar-producto hijo-img " onClick={() => deleteItem(item.id)}> <p className='td-word2'><span><RiDeleteBinLine/></span></p></div></td>      
                          </tr>
                      ))}
                    </tbody>
                  </table>
                    </div>

                  </div>
                    <div className='col-lg-4 col-md-12 col-sm-12'>
                      <div className='columna-cart'>
                      <table className="table bg-light sticky-op ">
                      <thead>
                          <th scope="col" class="text-center p-3" >RESUMEN DE COMPRA</th>
                      </thead>
                      <tbody>
                      <tr>
                            <td class="padre-img2">
                               <div className="hijo-img2 ">
                                <FaTruck/>Calcular costos de envios
                                <Link to={`/`}>¡Click Aqui!</Link> 
                                </div>
                             </td>
                        </tr>
                        <tr>
                          <td>
                                <section className='tableTotal'>
                                    <h4>Total:</h4>
                                    <h4> $ {getItemPrice()}</h4>
                              </section> 
                          </td>
                        </tr>
                        <tr>
                          <td>

                            <div className="menu-stock ">
                                <button type="button" className="bn barra-link-off2" onClick={emptyCart}>Vaciar</button>
                               
                                <button type="button" className="btn"> <Link className='barra-link-off2' to={'/checkout'} >Comprar</Link></button>
                             </div>                                                 
                          </td>
                        </tr>
                      </tbody>
                      </table>
                      </div>

                    </div>


                   {/* <section className='tableTotal'>
                     <h2>Total:</h2>
                     <h2> $ {getItemPrice()}</h2>
                   </section> */}
                   {/* <div className="menu-stock ">
                      <button type="button" className="btn barra-link-off2" onClick={emptyCart}>Vaciar</button>
                      <button type="button" className="btn"> <Link className='barra-link-off2' to={'/'} >Ir a tienda</Link></button>
                      <button type="button" className="btn"> <Link className='barra-link-off2' to={'/checkout'} >Comprar</Link></button>
                   </div> */}
             
              </section>
          </section>
  
        ) 
    
        :
      <section className="row">
        <div className="col-12 carrito-vacio"> 
                      <div>
                          <h2>SU CARRITO ESTÁ VACIO</h2>
                          <p>Para seguir comprando, navegar por las categorías en el sitio, o busque su producto.</p>
                          <button type="button" className='boton-submit'> <Link to={'/'} className='enlace-none' >Seguir comprando</Link></button>
                      </div>

        </div>
      </section>
      }
   </>
  )
}
