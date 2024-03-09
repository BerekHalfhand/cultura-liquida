import React from 'react'
import { Row, Col } from 'antd'
import PageComponent from 'components/pageComponent'
import ShopCategoryComponent from 'components/shop/shopCategoryComponent'

import { useQuery } from '@tanstack/react-query'

import getFn from 'api/get'

const ShopPage = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ['categories'],
    queryFn: () => getFn({url:'getAllCategories'})
  })


  if (isError) return <div>Request Failed</div>; // Error state
	if (isLoading) return <div>Loading...</div>; // Loading state

  return (
    <PageComponent>
        <Row>
          {data.map(cat => (
            <Col key={cat._id}>
              <ShopCategoryComponent {...cat} />
            </Col>
          ))}
        </Row>
    </PageComponent>
  )
}

export default ShopPage