import React, { useMemo, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import CartContext from './cartContext'


const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])

  const addToCart = async (id, amount) => {
      console.log('addToCart', id, amount)

    setCartItems(value => {
      const v = [...value]
      const index = v.findIndex(i => i.id === id)

      if (index >= 0) {
        v[index] = {
          id,
          amount: v[index].amount + amount
        }
      } else {
        v.push({
          id,
          amount
        })
      }

      return v
    })
  }

  const removeFromCart = (id, amount = 1) => {
    setCartItems(value => {
      const v = [...value]
      const index = v.findIndex(i => i.id === id)

      if (index >= 0) {
        if (v[index].amount - amount <= 0){
          v.splice(index, 1)
        } else {
          v[index] = {
            id,
            amount: v[index].amount - amount
          }
        }
      }

      return v
    })
  }

  const getItemsCount = () => {
    let count = 0
    for (let i = 0; i < cartItems.length; i++) {
      count += cartItems[i].amount
    }
    return count
  }

  const value = 
  useMemo(() => ({
    cartItems,
    itemsCount: getItemsCount(),
    addToCart,
    removeFromCart
  }), [JSON.stringify(cartItems)])
  console.log('value', value)

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

CartProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default CartProvider
