import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './Components/Cart/Cart';
import AllProducts from './Components/Home/AllProducts/AllProducts';
import Catagory from './Components/Home/Catagory/Catagory';
import Cloths from './Components/Home/Cloths/Cloths';
import Tech from './Components/Home/Tech/Tech';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
    
     <Routes>
      <Route path='/' element={<Catagory></Catagory>}></Route>
      <Route path='/allproducts' element={<AllProducts></AllProducts>}></Route>
      <Route path='/tech' element={<Tech></Tech>}></Route>
      <Route path='/cloths' element={<Cloths></Cloths>}></Route>
      <Route path='/cart' element={<Cart></Cart>}></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
    </div>
  );
}

export default App;
