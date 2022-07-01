import React from 'react'
import { useContext } from 'react'

import './CartWidget.css' 
import { BiShoppingBag } from "react-icons/bi";
import { CartContext } from './context/CartContext';
export default function CartWidget() {

    const {getItemQty} = useContext(CartContext)
    

  return (
   
    < >

    {getItemQty() > 0 &&  <BiShoppingBag style={{color:'white', fontSize:'2rem', marginRight:'1rem'}} />  }
    <span className='bolsa'>{getItemQty() > 0 && getItemQty()}</span>
    </>



    )
}
