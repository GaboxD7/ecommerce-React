
import  React, { useContext } from 'react'
import { CartContext } from './context/CartContext'
import './Cart.css'
import ItemCount from './ItemCount'
import {Link} from 'react-router-dom';
import {RiDeleteBinLine} from 'react-icons/ri'


export default function Cart() {

  const { cart, getItemPrice, deleteItem, emptyCart  } = useContext(CartContext)
  // return (
  //   <div> 
  //     {
  //     JSON.stringify(cart.length)}
  //   </div>
  // )

  return (
   <>
      {
        cart.length  > 0 ? (
          <section className='container'> 
              <section className='row' >
                <div className="col-12 p-5 mt-5 " >
                   <table className="table p-5">
                  <thead>
                        <th scope="col"  className="text-center p-3 color-space" >IMAGEN</th>
                        <th scope="col" className="text-center p-3" >CANTIDAD</th>
                        <th scope="col" className="text-center p-3" >PRODUCTOS</th>
                      
                        <th scope="col"className="text-center p-3" >SUB-TOTAL</th>
                        <th scope="col" className="text-center p-3 color-space" >Eliminar</th>
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
                              <td className="padre-img"><div className="hijo-img"> <ItemCount cantidad={item.cantidad} inicial={item.quantities} /> </div></td>
                              <td className="padre-img"><div className="hijo-img"> {item.brand} {item.model}</div></td>
                              <td className="padre-img"><div className="hijo-img">$ { item.price * item.quantities}</div></td>
                              <td className="padre-img"><div  className="borrar-producto hijo-img " onClick={() => deleteItem(item.id)}> <RiDeleteBinLine/></div></td>      
                          </tr>
                       
                      ))}
                    </tbody>
                  </table>
                   <section className='tableTotal'>
                     <h2>Total:</h2>
                     <h2> $ {getItemPrice()}</h2>
                   </section>
                   <div className="menu-stock ">
                      <button type="button" className="btn" onClick={emptyCart}>Vaciar carrito</button>
                      <button type="button" className="btn"> <Link to={'/'} >Seguir comprando</Link></button>
                   </div>
                </div>
              </section>
          </section>
  
        ) 
    
        :
      <section className="row">
        <div className="col-12 carrito-vacio bg-light">  
          <h2>SU CARRITO ESTÁ VACIO</h2>
          <p>Para seguir comprando, navegar por las categorías en el sitio, o busque su producto.</p>
          <button type="button" className="btn"> <Link to={'/'} >Seguir comprando</Link></button>
        </div>
      </section>
      }
   </>
  )
}
