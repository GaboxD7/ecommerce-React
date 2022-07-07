
import './App.css';

import ItemDetailContainer from './Components/ItemDetailContainer';
import ItemListContainer from './Components/ItemListContainer';

import	{
  BrowserRouter,
  Route,
  Routes}
  from "react-router-dom"


import Navbar from './Components/Navbar.jsx';
import Cart from './Components/Cart';
import MyProvider from './Components/context/CartContext';
import CheckOut from './Components/CheckOut';
import Hero from './Components/Hero';


function App() {


  return (
    <div className="App">
      
      <BrowserRouter>
      <MyProvider>
        <header className="App-header">
        <Navbar />
        </header>
        <Hero />
        <Routes>
          <Route path="/" element={<ItemListContainer />} ></Route>
          <Route path="category/:id" element={<ItemListContainer />} ></Route>
          <Route path="item/:id" element={<ItemDetailContainer />} ></Route>
          <Route path= "cart/" element={<Cart />}> </Route>
          <Route path= "checkout/" element={<CheckOut />}> </Route>
        </Routes>
        </MyProvider>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
