import React from 'react'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

const ShopCategoryComponent = ({ title, categoryId, image, description }) => {
  return (
    <Link to={`category/${categoryId}`} >
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  )
}

ShopCategoryComponent.defaultProps = {
  title: '',
  image: 'img/spores.webp',
  description: '',
}

ShopCategoryComponent.propTypes = {
  title: PropTypes.string,
  categoryId: PropTypes.string.isRequired,
  image: PropTypes.string,
  description: PropTypes.string,
}

export default ShopCategoryComponent