import React from 'react'

const PageComponent = ({ children }) => {
  return (
    <div className="page-container">
      <div className="page">
        {children}
      </div>
    </div>
  )
}

export default PageComponent