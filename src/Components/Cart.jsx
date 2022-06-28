
import  React, { useContext } from 'react'
import { CartContext } from './context/CartContext'
import './Cart.css'
import ItemCount from './ItemCount'
import {Link} from 'react-router-dom';
import {RiDeleteBinLine} from 'react-icons/ri'

export default function Cart() {

  const { cart, getItemPrice, deleteItem, emptyCart  } = useContext(CartContext)
console.log(getItemPrice)
  return (
   <>
      {
        cart.length  > 0 ? (
          <section className='row col-12' >
                <div className="col-8 p-5 mt-5 " >
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
                      <td className="padre-img"><img 
                      className="hijo-img img-carro" 
                      src={item.image} 
                      alt="producto"
                      />
                      </td>
                      <td className="padre-img"><div className="hijo-img"> <ItemCount cantidad={item.cantidad} inicial={item.quantities} /> </div></td>
                      <td className="padre-img"><div className="hijo-img"> {item.brand} {item.model}</div></td>
                    
                      <td className="padre-img"><div className="hijo-img">$ { item.price}</div></td>
              
                      <td className="padre-img">
                          <div  className="borrar-producto hijo-img " onClick={() => deleteItem(item.id)}> <RiDeleteBinLine/></div>
                      </td>
                      
                  </tr>
                        ))}
           
                  </tbody>
                  <tfoot>
                    {/* <tr className='container-price'>
                    <td className="padre-img2"><div className="hijo-img2">Total</div></td>
                    <td className="padre-img2"><div className="hijo-img2">Total</div></td>
                    <td className="padre-img2"><div className="hijo-img2">Total</div></td>
                    <td className="padre-img2"><div className="hij-img2">{getItemPrice()}</div></td>
                    <td className="padre-img2"><div className="hij-img2"></div></td> */}
              
                    {/* <span>Total</span>
                    <span>Total</span> */}
                      {/* <td className='container-pice'><h2>Total</h2></td>
                      <td className='container-rice'><h2></h2></td>
                      <td className='container-prce'><h2>Total</h2></td> */}
                
                      {/* <td>{getItemPrice()}</td> */}
                    {/* </tr> */}
                  </tfoot>
                  <section className='table'>

                  </section>
                </table>
               <div className="menu-stock ">
                <button type="button" classNameName="btn" onClick={emptyCart}>Vaciar carrito</button>
                <button type="button" classNameName="btn"> <Link to={'/'} >Seguir comprando</Link></button>
               
               </div>
             </div>


              
          </section>
        ) 
        
        
        
        :<section className="row">
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
