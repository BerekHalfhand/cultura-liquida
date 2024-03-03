import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CartContext from 'contexts/cartContext/cartContext'

const Item = ({ _id, title, link, image, description }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext)
  console.log('Item', cartItems)

  return (
    <Card className="text-center">
      <Card.Header>Featured</Card.Header>
      <Link to={`item${link}`} >
      <Card.Body>
        <Card.Img variant="top" src={image} />
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
      </Card.Body>
      </Link>
      <Card.Footer className="text-muted">
        <Button variant="primary" onClick={() => addToCart(_id, 1)}>Add to cart</Button>
        <Button variant="secondary" onClick={() => removeFromCart(_id, 1)}>Remove from cart</Button>
      </Card.Footer>
    </Card>
  )
}

Item.defaultProps = {
  title: '',
  link: '/',
  image: 'img/spores.webp',
  description: '',
}

Item.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
}

export default Item