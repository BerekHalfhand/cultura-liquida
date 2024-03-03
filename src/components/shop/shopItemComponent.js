import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CartContext from 'contexts/cartContext/cartContext'

const ShopItemComponent = ({item}) => {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext)
  const { itemId, title, image, description } = item
  console.log('Item', cartItems)

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
        <Button variant="primary" onClick={() => addToCart(item, 1)}>Add to cart</Button>
        <Button variant="secondary" onClick={() => removeFromCart(item, 1)}>Remove from cart</Button>
      </Card.Footer>
    </Card>
  )
}

ShopItemComponent.propTypes = {
  item: PropTypes.object.isRequired
}

export default ShopItemComponent