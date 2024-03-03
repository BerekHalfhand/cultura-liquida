import './App.scss'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CartProvider from 'contexts/cartContext/cartProvider'

import Header from 'components/header'
import HomePage from 'pages/home'
import ShopPage from 'pages/shop'
import BlogPage from 'pages/blog'
import CartPage from 'pages/cart'
import CategoryPage from 'pages/shop/category'

function App() {
  return (
    <section className="App">
      <CartProvider>
        <Header />
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
