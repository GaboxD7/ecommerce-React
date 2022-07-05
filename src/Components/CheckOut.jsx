import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React from 'react'
import { useContext } from 'react';
import { useState } from 'react'
import { CartContext } from './context/CartContext';

const CheckOut = () => {
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ cel, setCel ] = useState('');
  const {cart, getItemPrice} = useContext(CartContext)
  const total = getItemPrice()
  const db = getFirestore();
  const orderCollection = collection(db, 'orders');
  let fechaActual = new Date ()

  const handleClick = () => {

    const order = {
      buyer: { name, email, cel },
      items: cart,
      fechaActual,
      total
    }
  
    addDoc(orderCollection, order).then(({id}) => {
        console.log(id)
    })
  }
  return (
    <>
    <section className='d-flex justify-content-center align-items-center vh-100  '>
      {/* <form action=""> */}
      <label htmlFor="">Nombre</label>
      <input type="text" placeholder='Nombre'  onChange={(e) => setName(e.target.value)} />
      <label htmlFor="">Email</label>
      <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
      <label htmlFor="">Celular</label>
      <input type="cel" placeholder='Celular' onChange={(e) => setCel(e.target.value)}  />
      <button onClick={handleClick}>comprar</button>
      {/* </form> */}
    </section>

    </>
  )
}

export default CheckOut