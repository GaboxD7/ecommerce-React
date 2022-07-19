import React from 'react'
import { useContext } from 'react'
import './CartWidget.css' 
import { BiShoppingBag } from "react-icons/bi";
import { CartContext } from './context/CartContext';
export default function CartWidget() {

    const {getItemQty} = useContext(CartContext)
    

  return (
   
    < >
        { <BiShoppingBag style={{color:'white', fontSize:'3rem', marginRight:'0rem'}} />  }
        <span className='bolsa'>{getItemQty() > 0 && getItemQty()}</span>
    </>



    )
}
