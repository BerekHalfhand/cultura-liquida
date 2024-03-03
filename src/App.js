import './App.scss'
// import Button from 'react-bootstrap/Button';
import { Route, Routes } from 'react-router-dom'
import CartProvider from 'contexts/cartContext/cartProvider'

import Header from './components/header'
import Home from './pages/home'
import Shop from './pages/shop'
import Blog from './pages/blog'
import Cart from './pages/cart'
import ShopItem from './pages/shop/shopItem'

function App() {
  return (
    <section className="App">
      <CartProvider>
        <Header />
        <Routes>
          <Route exact path="/" element={ <Home/> } />
          <Route exact path="/shop" element={ <Shop/> } />
          <Route exact path="/blog" element={ <Blog/> } />
          <Route exact path="/cart" element={ <Cart/> } />
          <Route path="/shop/item/:itemId" element={ <ShopItem/> } />
        </Routes>
      </CartProvider>
    </section>
  );
}

export default App;
