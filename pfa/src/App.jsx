
import './App.css';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Success from './pages/Success';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,Navigate
} from "react-router-dom";
import { useSelector } from "react-redux";


function App() {

  const user = useSelector((state) => state.user.currentUser);
  return (
<Router>
  <Routes>
  <Route exact path="/" element={<Home/>}/>

  <Route exact path="/products/:category" element={<ProductList/>}/>   
  <Route exact path="/product/:id" element={<Product/>}/>
  <Route exact path="/cart" element={ <Cart />}/>
  <Route exact path="/login"   element={ <Login />}/>
  <Route exact path="/register" element={<Register/>}/>
  <Route exact path="/success" element={<Success/>}/>



  </Routes>
</Router>
  );
}

export default App;
