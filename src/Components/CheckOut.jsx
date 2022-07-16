import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useContext } from 'react';
import { useState } from 'react'
import { CartContext } from './context/CartContext';
import './CheckOut.css' 
import { Formik, Form, Field, ErrorMessage } from 'formik';

const CheckOut = () => {
  const [formSend, setFormSend ] = useState(false);

  const {cart, getItemPrice} = useContext(CartContext)
  const total = getItemPrice()
  const db = getFirestore();
  const orderCollection = collection(db, 'orders');
  let fechaActual = new Date ()

  // const handleClick = () => {

  //   const order = {
  //     buyer: { name, email, cel },
  //     items: cart,
  //     fechaActual,
  //     total
  //   }
  
  //   addDoc(orderCollection, order).then(({id}) => {
  //       console.log(id)
  //   })
  // }
  return (
    <>
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
                  alert("su pedido es "+ id)
              })
              
            resetForm()
            setFormSend(true)
            setTimeout(()=> setFormSend(false), 3000 )
          }}
        >
              {({errors}) => (
                    <Form >
        
                        <div>
                            <label htmlFor='nombre'>Nombre</label>
                            <Field 
                            type="text" 
                            id='nombre' 
                            name='name' 
                            placeholder='Escribe tu nombre' 
            
                            />
                             <ErrorMessage name='name' component={() => (
                             <div className='error'>{errors.name}</div> )} />
         
                        </div>
                        <div>
                            <label htmlFor='cel'>Celular</label>
                            <Field 
                            type="tel" 
                            id='cel' 
                            name='cel' 
                            placeholder='Escribe tu celular' 
             
                            />
                            
                            <ErrorMessage name='cel' component={() => (
                              <div className='error'>{errors.cel}</div> )} />
                        </div>
                        <div>
                            <label htmlFor='nombre'>Email</label>
                            <Field 
                            type="email" 
                            id='correo' 
                            name='email' 
                            placeholder='Escribe tu correo' 
  

                            />
                             <ErrorMessage name='email' component={() => (
                             <div className='error'>{errors.name}</div> )} />
                        </div>
                      <button type='submit' >Enviar</button>
                      {console.log(formSend)}
                       {formSend && <p className='exito'>¡Formulario enviado con exito!</p>}
                  </Form>
              )}
        </Formik>
      </section>

    </>
  )
}

export default CheckOut