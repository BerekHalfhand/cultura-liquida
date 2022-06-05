import './App.css'
// import Button from 'react-bootstrap/Button';
import { Route, Routes } from 'react-router-dom'

import Header from './components/header'
import Home from './pages/home'
import Shop from './pages/shop'
import Blog from './pages/blog'
import Cart from './pages/cart'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={ <Home/> } />
        <Route exact path="/shop" element={ <Shop/> } />
        <Route exact path="/blog" element={ <Blog/> } />
        <Route exact path="/cart" element={ <Cart/> } />
      </Routes>
    </div>
  );
}

export default App;
