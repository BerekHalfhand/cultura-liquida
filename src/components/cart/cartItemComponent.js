import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import { Image, Button, Input } from 'antd'
import CartContext from 'contexts/cartContext/cartContext'

const CartItemComponent = ({ item }) => {
  const { setToCart, removeFromCart } = useContext(CartContext)
  
  const [amount, setAmount] = useState(item.amount)

  const onChangeInput = e => {
    let value = 0
    if (e?.target?.value) value = +e.target.value
    
    setToCart(item, value)
    setAmount(value)
  }
  const onRemoveBtn = () => removeFromCart(item, 0, true)

  return (
    <div className="cart-item-wrap">
      <div className='cart-item-image'>
        <Image src={item.image} alt={item.title} />
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
      <div className='cart-item-actions'>
        <Input type="number" value={amount} onChange={onChangeInput} />
        <Button variant="secondary" onClick={onRemoveBtn}>Remove all</Button>
        Total: {amount * item.price}
      </div>
    </div>
  )
}

CartItemComponent.propTypes = {
  item: PropTypes.object.isRequired
}

export default CartItemComponent