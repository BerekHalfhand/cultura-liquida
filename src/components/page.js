import React from 'react'

const Page = ({ children }) => {
  return (
    <div className="page-container">
      <div className="page">
        {children}
      </div>
    </div>
  )
}

export default Page