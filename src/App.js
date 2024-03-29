import './App.scss'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Layout } from 'antd'

import CartProvider from 'contexts/cartContext/cartProvider'
import HeaderComponent from 'components/headerComponent'

import HomePage from 'pages/homePage'
import ShopPage from 'pages/shopPage'
import BlogPage from 'pages/blogPage'
import CartPage from 'pages/cartPage'
import CheckOutPage from 'pages/checkOutPage'
import SuccessPage from 'pages/checkOut/success'
import CategoryPage from 'pages/shop/categoryPage'
import NotFoundPage from 'pages/notFoundPage'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      staleTime: 1000 * 60 * 5, // 5 min
    }
  }
})


function App() {
  return (
    <section className="App">
      <Layout>
      <QueryClientProvider client={queryClient}>
        <CartProvider>
          <HeaderComponent />
          <Routes>
            <Route exact path="/" element={ <HomePage/> } />
            <Route exact path="/shop" element={ <ShopPage/> } />
            <Route exact path="/blog" element={ <BlogPage/> } />
            <Route exact path="/cart" element={ <CartPage/> } />
            <Route exact path="/check-out" element={ <CheckOutPage/> } />
            <Route exact path="/check-out/success" element={ <SuccessPage/> } />
            <Route path="/shop/category/:categoryId" element={ <CategoryPage/> } />

            <Route path='*' element={<NotFoundPage />}/>
          </Routes>
        </CartProvider>
      </QueryClientProvider>
      </Layout>
    </section>
  );
}

export default App;
