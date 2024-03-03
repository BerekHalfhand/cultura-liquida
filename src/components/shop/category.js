import React from 'react'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

const Category = ({ title, link, image, description }) => {
  return (
    <Link to={`item${link}`} >
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

Category.defaultProps = {
  title: '',
  link: '/',
  image: 'img/spores.webp',
  description: '',
}

Category.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
}

export default Category