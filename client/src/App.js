import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { useState } from 'react';
import productsData from './Data/products.json';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import ProductDetails from './components/ProductDetails';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';



function App() {

  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const addToCart = (product) => {
    console.log("app",product);
    setCart(prevCart => {
      const itemExists = prevCart.find(item => item.id === product.id);
      if (itemExists) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };


  const filteredProducts = productsData.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );  

  return (
  <div className="container mt-4">
      <h1 className="text-center">My Ecommerce App</h1>

      {/* Search Input */}
      <input
        type="text"
        className="form-control my-3"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    <Router>
      {/* <Header cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)} /> */}
      <Routes>
      {/* <Route path="/" element={<ProductList products={filteredProducts} addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cart} />} />
        <Route path="/product/:id" element={<ProductDetails addToCart={addToCart} />} /> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage/>} />
      </Routes>
    </Router>
    </div>

  );
}

export default App;
