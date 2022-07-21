import React from 'react'
import Item from './Item'
import Banner from './Banner';

const ItemList = ({bikes}) => {

  return (
    <>
     {/* <Banner title={`${ bikes.length > 6 ? "Todas" : bikes[0]?.category}`} /> */}
        {bikes?.map(bike => <Item key={bike.id} bike={bike}  /> )}
    </>
  )
}


export default ItemList