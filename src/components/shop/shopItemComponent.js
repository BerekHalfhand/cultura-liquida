import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { Button, Card, Input } from 'antd'
import { Link } from 'react-router-dom'
import CartContext from 'contexts/cartContext/cartContext'

const { Meta } = Card

const ShopItemComponent = ({item}) => {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext)
  const { itemId, title, image, description } = item
  const [amount, setAmount] = useState(1)

  // console.log('Item', cartItems)
  const onChangeInput = e => {
    let value = 0
    if (e?.target?.value) value = +e.target.value
    
    setAmount(value)
  }
  // console.log('amount', amount)

  return (
    <Card
    hoverable
    style={{ width: 480 }}
    cover={
      <Link to={`item/${itemId}`} >
        <img alt="category" src={image} />
      </Link>
    }
    actions={[
      <Input type="number" value={amount} onChange={onChangeInput} />,
      <Button type="primary" onClick={() => addToCart(item, amount)}>Add to cart</Button>,
      <Button type="secondary" onClick={() => removeFromCart(item, amount)}>Remove from cart</Button>,
    ]}
  >
    <Meta title={title} description={description} />
  </Card>
  )
}

ShopItemComponent.propTypes = {
  item: PropTypes.object.isRequired
}

export default ShopItemComponent