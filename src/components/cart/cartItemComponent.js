import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CartContext from 'contexts/cartContext/cartContext'

const CartItemComponent = ({ item }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext)
  console.log('Item', cartItems)

  return (
    <div className="cart-item-wrap">
      <div className='cart-item-image'>
        <Image src={item.image} alt={item.title} roundedCircle />
      </div>
      <div className='cart-item-info'>
        <div>
          {item.title}
        </div>
        <div>
          {item.size}
        </div>
        <div>
          {item.price} COP
        </div>
      </div>
      <div className='cart-item-actions'>{item.amount}</div>
    </div>
  )
}

CartItemComponent.propTypes = {
  item: PropTypes.object.isRequired
}

export default CartItemComponent