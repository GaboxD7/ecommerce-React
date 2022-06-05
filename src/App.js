

import './App.css';
import ItemCount from './Components/ItemCount';
import ItemListContainer from './Components/ItemListContainer';

import Navbar from './Components/Navbar.jsx';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar></Navbar>
      <ItemCount value={1}></ItemCount>
      <ItemListContainer/>
              </header>
    </div>
  );
}

export default App;
