import React from 'react'
import './Banner.css'
const Banner = ({title}) => {
  console.log(title)
  return (
    <div className='titulo'> <h3>{title }</h3> </div>
  )
}

export default Banner