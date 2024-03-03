import React, { useMemo, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import CartContext from './cartContext'


const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])

  const addToCart = async (item, amount) => {
    if (!item || !item._id) return false
    const id = item?.itemId

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

  const removeFromCart = (item, amount = 1) => {
    if (!item || !item._id) return false
    const id = item?.itemId

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
