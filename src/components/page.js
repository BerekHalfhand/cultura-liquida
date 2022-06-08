import React from 'react'

const Page = ({ children }) => {
  return (
    <div class="page-container">
      <div class="page">
        {children}
      </div>
    </div>
  )
}

export default Page