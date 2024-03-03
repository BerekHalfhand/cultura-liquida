import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { Button, Card, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CartContext from 'contexts/cartContext/cartContext'

const ShopItemComponent = ({item}) => {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext)
  const { itemId, title, image, description } = item
  const [amount, setAmount] = useState(1)

  console.log('Item', cartItems)
  const onChangeInput = e => {
    let value = 0
    if (e?.target?.value) value = +e.target.value
    
    setAmount(value)
  }
  console.log('amount', amount)

  return (
    <Card className="text-center">
      <Card.Header>Featured</Card.Header>
      <Link to={`item/${itemId}`} >
      <Card.Body>
        <Card.Img variant="top" src={image} />
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
      </Card.Body>
      </Link>
      <Card.Footer className="text-muted">
        <Form.Control type="number" value={amount} onChange={onChangeInput} />
        <Button variant="primary" onClick={() => addToCart(item, amount)}>Add to cart</Button>
        <Button variant="secondary" onClick={() => removeFromCart(item, amount)}>Remove from cart</Button>
      </Card.Footer>
    </Card>
  )
}

ShopItemComponent.propTypes = {
  item: PropTypes.object.isRequired
}

export default ShopItemComponent