import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useContext } from 'react';
import { useState } from 'react'
import { CartContext } from './context/CartContext';
import './CheckOut.css' 
import {BiEnvelope} from "react-icons/bi"
import {FaPhoneSquareAlt} from "react-icons/fa"
import {BiUserPin} from "react-icons/bi"
import {TbSend} from "react-icons/tb"
import {TiArrowRight} from "react-icons/ti"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {Link} from 'react-router-dom';

const CheckOut = () => {
  const [formSend, setFormSend ] = useState(false);
  const [orderCompra, setOrderCompra] = useState('')
  const {cart, getItemPrice, emptyCart } = useContext(CartContext)
  const total = getItemPrice()
  const db = getFirestore();
  const orderCollection = collection(db, 'orders');
  let fechaActual = new Date ()


  return (
    <>      { orderCompra.length > 0 ? (
      <div className="orden-container">
        <h1>
          Muchas gracias por comprar en nuestra tienda!
        </h1>
        <p>
          Su orden es: {orderCompra}
        </p>
        <button type="button" className="botn"> <Link className='barra-link-off2' to={'/'} >Seguir comprando</Link></button>
      </div>
    ) : (
      <section className='container-form'>
        <Formik
          initialValues={{
            name:'',
            cel:'',
            email:''
            
          }}
          validate= {(valores) => {
            let errores = {};
            // Validacion nombre
            if(!valores.name) {
                errores.name = 'Porfavor ingresa un nombre'
            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name) ) {
               errores.name = 'El nombre solop puede tener letras y espacios'
            }
            // validacion cell
            if (!valores.cel) {
              errores.cel = 'Porfavor ingrese un numero'
            } else if (!/^[+]*[(]?[0-9]{1,4}[)]?[0-9-\s.]+$/.test(valores.cel)) {
              errores.cel = 'Ingrese un numero valido'
            }
            // validacion correo
            if(!valores.email) {
              errores.email = 'Por favor ingresa un email'
            }else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email))
             errores.email = 'El email solo debe contener, letras, numeros, puntos, guiones y guion bajo'
            
            return errores;
          }}
          onSubmit={(valores, {resetForm}) => {
            // Base de datos
            console.log(valores)
                const order = {
                buyer: valores,
                items: cart,
                fechaActual,
                total
              }
  
              addDoc(orderCollection, order).then(({id}) => {
                  console.log(id);
                  setOrderCompra(id)
                  // localStorage.clear();
                  emptyCart()
              })
              
            resetForm()
            setFormSend(true)
        
            setTimeout(()=> setFormSend(false), 3000 )
          }}
        >
              {({errors}) => (
                    <Form className='formulario-checkout' >
                        <h4>Complete El Formulario</h4>
                        <div className='form-check' >
                          <BiUserPin  className='icon-env' />
                            <Field 
                            type="text" 
                            id='nombre' 
                            name='name' 
                            placeholder='Escribe tu nombre' 
                            className="input-check"
             
                            />
                        </div>
                        <ErrorMessage name='name' component={() => (
                             <div className='error'>{errors.name}</div> )} />

                        <div className='form-check' >
                            <FaPhoneSquareAlt className='icon-env' />
                            <Field 
                            type="tel" 
                            id='cel' 
                            name='cel' 
                            placeholder='Escribe tu celular' 
                            className="input-check"
             
                            />

                        </div>
                                                    
                        <ErrorMessage name='cel' component={() => (
                              <div className='error'>{errors.cel}</div> )} />
                        <div className='form-check' >
                      
                            <BiEnvelope className='icon-env' />
                            <Field 
                            type="email" 
                            id='correo' 
                            name='email' 
                            placeholder='Escribe tu correo' 
                            className='input-check'
  

                            />
                            
                        </div>
                        <ErrorMessage name='email' component={() => (
                             <div className='error'>{errors.email}</div> )} />
                      <button type='submit' className='boton-submit' >Enviar<span><TiArrowRight className='icon-enviar' /></span></button>
         
                       {formSend && <p className='exito'>¡Formulario enviado con exito!</p>}
                  </Form>
              )}
        </Formik>
    
      </section>
)}
    </>
  )
}

export default CheckOut