import './App.scss'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CartProvider from 'contexts/cartContext/cartProvider'

import HeaderComponent from 'components/headerComponent'
import HomePage from 'pages/homePage'
import ShopPage from 'pages/shopPage'
import BlogPage from 'pages/blogPage'
import CartPage from 'pages/cartPage'
import CategoryPage from 'pages/shop/categoryPage'

function App() {
  return (
    <section className="App">
      <CartProvider>
        <HeaderComponent />
        <Routes>
          <Route exact path="/" element={ <HomePage/> } />
          <Route exact path="/shop" element={ <ShopPage/> } />
          <Route exact path="/blog" element={ <BlogPage/> } />
          <Route exact path="/cart" element={ <CartPage/> } />
          <Route path="/shop/category/:categoryId" element={ <CategoryPage/> } />
        </Routes>
      </CartProvider>
    </section>
  );
}

export default App;
