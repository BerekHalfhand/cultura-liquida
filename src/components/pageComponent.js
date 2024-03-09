import React from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'

const { Content } = Layout

const PageComponent = ({ children }) => (
  <div className="page-container">
    <Content className="page">
      {children}
    </Content>
  </div>
)

PageComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default PageComponent