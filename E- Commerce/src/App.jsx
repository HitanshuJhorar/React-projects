import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from './pages/Home'
import Auth from './pages/Auth'
import CheckOut from './pages/Checkout'
import Navbar from './Components/Navbar';
import AuthProvider from './Context/AuthContext';
import ProductDetails from './pages/Product-details';
import CartProvider from './Context/CartContext';
import Error404 from './pages/Error404';


function App() {
  return (
    <AuthProvider>
      <CartProvider>
      <div className="App">
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/auth' element={<Auth/>}/>
      <Route path='/checkout' element={<CheckOut/>} />
      <Route path='/products/:id' element={<ProductDetails/>} />
      <Route path='*' element={<Error404/>} />

      </Routes>
    </div>
      </CartProvider>
    </AuthProvider>
  )
}

export default App
