
import './App.css';

import ItemDetailContainer from './Components/ItemDetailContainer';
import ItemListContainer from './Components/ItemListContainer';
import	{
  BrowserRouter,
  Route,
  Routes}
  from "react-router-dom"


import Navbar from './Components/Navbar.jsx';


function App() {


  return (
    <div className="App">
      
      <BrowserRouter>
        <header className="App-header">
        <Navbar></Navbar>
        </header>
        <Routes>
          <Route path="/" element={<ItemListContainer />} ></Route>
          <Route path="category/:id" element={<ItemListContainer />} ></Route>
          <Route path="item/:id" element={<ItemDetailContainer />} ></Route>
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
