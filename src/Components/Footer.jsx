import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';
import {BiEnvelope} from "react-icons/bi"
import {AiOutlineArrowRight, AiOutlineTwitter} from "react-icons/ai"
import {GrFacebookOption} from 'react-icons/gr'
import {FaWhatsapp} from 'react-icons/fa'
import {RiPhoneFill} from 'react-icons/ri'

const Footer = props => {
  return (
    <footer >
      <div className='container-footer'>

      
        <div className='columna-footer'>
            <img src="../../imagenes/logo-bike.png" className='logo' height="70px" width="120px" alt="" />
            <p>Aqui encontraras un espacio para obtener las mejores marcas de bicicletas.</p>
        </div>
        <div className='columna-footer'>
          <h4>Tienda <div className='underline'><span></span></div></h4>
          <p>Chile</p>
          <p>Mario Kreutzberger, 1531</p>
          <p className='email-id'>bikesantiago@gmail.com</p>
          <p  >+56 - 011223344</p>
        
        </div>
        <div className='columna-footer'>
          <h4>Links  <div className='underline'><span></span></div></h4>
          <ul className='form-list-footer'>
          <li><Link className='enlace' to={'/'} >Inicio</Link></li>
          <li><Link className='enlace' to={'/'} >Inicio</Link></li>
          <li><Link className='enlace' to={'/'} >Contactos</Link></li> 
          <li><Link className='enlace' to={'/'} >Contactos</Link></li>
          </ul>

        </div>
        <div className='columna-footer'>
          <h4>Suscribir <div className='underline'><span></span></div></h4>
          <form className='form-footer' action="">
          
            <BiEnvelope className='icon-envelope' />
            <input type="email" placeholder='Escribe tu email' required />
            <button type='submit'><AiOutlineArrowRight className='vb' /></button>
          </form>
            <div className='icon-social'>
                <AiOutlineTwitter  className='icons' />
                <GrFacebookOption className='icons' />
                <FaWhatsapp className='icons' />
            </div>

        </div>

        </div>
        <hr className='line' />
        <p className='copy-right'>Developed by Gabriel Rios 2022 ©. All rights reserved.</p>
    </footer>
  )
}



export default Footer