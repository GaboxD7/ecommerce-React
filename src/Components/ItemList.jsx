import React from 'react'
import Item from './Item'

const ItemList = ({bikes}) => {
  return (
    <div>
        {bikes?.map(bike => <Item key={bike.id} bike={bike} /> )}
    </div>
  )
}


export default ItemList