import React from 'react'
import Item from './Item'

const ItemList = ({bikes}) => {

  return (
    <>
        {bikes?.map(bike => <Item key={bike.id} bike={bike} /> )}
    </>
  )
}


export default ItemList