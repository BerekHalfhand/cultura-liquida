import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PageComponent from 'components/pageComponent'
import ShopCategoryComponent from 'components/shop/shopCategoryComponent'
// import useGet from 'hooks/useGet'

import { useQuery } from '@tanstack/react-query'

import getFn from 'api/get'

const ShopPage = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ['categories'],
    queryFn: () => getFn({url:'getAllCategories'})
  })

  // console.log(isLoading, isError, data)

  // const {data, error} = {}//useGet('getAllCategories')

  if (isError) return <div>Request Failed</div>; // Error state
	if (isLoading) return <div>Loading...</div>; // Loading state

  return (
    <PageComponent>
      <Container >
        <Row className="justify-content-center">
          {data.map(cat => (
            <Col className="justify-content-center d-flex" key={cat._id}>
              <ShopCategoryComponent {...cat} />
            </Col>
          ))}
        </Row>
      </Container>
    </PageComponent>
  )
}

export default ShopPage