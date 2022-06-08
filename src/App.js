

import { useState } from 'react';
import './App.css';
import ItemCount from './Components/ItemCount';
import ItemListContainer from './Components/ItemListContainer';

import Navbar from './Components/Navbar.jsx';


function App() {
const [max, seTmax] = useState(10)
    const onAdd = (count) => {

     seTmax(max -count)
     if(max > 0) {
      alert(`Agregaste ${count} productos `)
     } else {

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
      </header>
      <ItemListContainer />
    </div>
  );
}

export default App;
