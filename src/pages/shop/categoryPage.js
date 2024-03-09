import React from 'react'
import { useParams } from 'react-router-dom'
import { Row, Col } from 'antd'
import PageComponent from 'components/pageComponent'
import ShopItemComponent from 'components/shop/shopItemComponent'
// import useGet from 'hooks/useGet'

import { useQuery } from '@tanstack/react-query'
import getFn from 'api/get'


const CategoryPage = () => {
  const { categoryId } = useParams()
  // const {data, error} = useGet(`getOneCategory/${categoryId}`)

  const { isLoading, isError, data } = useQuery({
    queryKey: [`category:${categoryId}`],
    queryFn: () => getFn({url:`getOneCategory/${categoryId}`})
  })
  // console.log('q', q)

  if (isError) return <div>Request Failed</div>; // Error state
	if (isLoading) return <div>Loading...</div>; // Loading state
  console.log('data', data)

  return (
    <PageComponent>
      <Row>
        {data.map(item => (
          <Col key={item._id}>
            <ShopItemComponent item={item} />
          </Col>
        ))}
      </Row>
    </PageComponent>
  )
}

export default CategoryPage