import React from 'react'
import "./Medio.css"
import { Link } from 'react-router-dom';
import Banner from './Banner';

export const Medio = () => {
  return (<>
<Banner title={"Elige"} />
    <section className='container-medio'>
     
       
      <div class="container-medio-grid">
        <div class="container-montaña">
          <div className='indoor'>
           <Link to={'category/MONTAÑA'} > 
              <img className='imagen-medio'  src="https://images.unsplash.com/photo-1497515098781-e965764ab601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1121&q=80" alt="" />
            </Link>   
          </div>
        
        </div>
        <div class="container-urbana">
          <div className='indoor'> 
              <Link to={'category/URBANA'} > 
                <img  className='imagen-medio' src="https://images.unsplash.com/photo-1503669678209-c68d00b3765d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
             </Link>   
          </div>
        
        </div>
        <div class="container-productos">
          <div className='indoor'>
            <Link to={'productos'} > 
              <img  className='imagen-medio' src="../../imagenes/bike-vertical.avif" alt="" />
            </Link>
          </div>
            
         
        </div>
      </div>
    </section>
    <Banner title={"hola "} />
    </>
  )
}
