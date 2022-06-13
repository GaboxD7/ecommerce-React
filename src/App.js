
import './App.css';

import ItemDetailContainer from './Components/ItemDetailContainer';
import ItemListContainer from './Components/ItemListContainer';


import Navbar from './Components/Navbar.jsx';


function App() {


  return (
    <div className="App">
      <header className="App-header">
      <Navbar></Navbar>
      </header>
      {/* <ItemListContainer /> */}
      <ItemDetailContainer />
    </div>
  );
}

export default App;
