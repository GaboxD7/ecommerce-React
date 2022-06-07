

import { useState } from 'react';
import './App.css';
import ItemCount from './Components/ItemCount';
import ItemListContainer from './Components/ItemListContainer';

import Navbar from './Components/Navbar.jsx';


function App() {
const [max, seTmax] = useState(10)
    const onAdd = (count) => {

console.log(max)
     seTmax(max -count)
     if(max > 0) {
      alert(`Agregaste ${count} productos `)
     } else {
      console.log(max)
      alert(`No che pede `)
     }

      
    }
  return (
    <div className="App">
      <header className="App-header">
      <Navbar></Navbar>
      <ItemCount 
      value={1}
      max={max}
      onAdd={onAdd}></ItemCount>
      <ItemListContainer/>
              </header>
    </div>
  );
}

export default App;
