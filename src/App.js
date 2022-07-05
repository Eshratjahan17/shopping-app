import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './Components/Cart/Cart';
import AllProducts from './Components/Home/AllProducts/AllProducts';
import Cloths from './Components/Home/Cloths/Cloths';
import Home from './Components/Home/Home';
import Tech from './Components/Home/Tech/Tech';
import Navbar from './Components/Navbar/Navbar';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div >
    <Navbar></Navbar>
      <Routes>
        <Route
          path="/"
          element={<Home></Home>}
        ></Route>
        <Route
          path="/allproducts"
          element={<AllProducts></AllProducts>}
        ></Route>
        <Route path="/tech" element={<Tech></Tech>}></Route>
        <Route path="/cloths" element={<Cloths></Cloths>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
