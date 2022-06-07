import React from 'react'
// import ItemList from './ItemList'
const Item = (bikes) => {
  return (
<div className="card">
    <img src="" alt="Avatar"  />
    <div className="container">
      <h4><b>{bikes.name}</b></h4>
      <p>Architect & Engineer</p>
    </div>
  </div>
  )
}

export default Item