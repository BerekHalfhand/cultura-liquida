import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'antd'
import { Link } from 'react-router-dom'

const { Meta } = Card

const ShopCategoryComponent = ({ title, categoryId, image, description }) => (
  <Link to={`category/${categoryId}`} >
    <Card
      hoverable
      style={{ width: 480 }}
      cover={<img alt="category" src={image} />}
    >
      <Meta title={title} description={description} />
    </Card>
  </Link>
)

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