import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PageComponent from 'components/pageComponent'
import ShopCategoryComponent from 'components/shop/shopCategoryComponent'
import useFetch from 'hooks/useFetch'

const ShopPage = () => {
  const {data, error} = useFetch('getAllCategories')

  if (error) return <div>Request Failed</div>; // Error state
	if (!data) return <div>Loading...</div>; // Loading state

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