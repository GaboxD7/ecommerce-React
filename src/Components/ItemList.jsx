import React from 'react'
import Item from './Item'

const ItemList = ({bikes, onAdd}) => {


  return (
    <>
        {bikes?.map(bike => <Item key={bike.id} bike={bike} onAdd={onAdd} value={1} /> )}
    </>
  )
}


export default ItemList