import React from 'react'
import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import PageComponent from 'components/pageComponent'
import ShopItemComponent from 'components/shop/shopItemComponent'
import useFetch from 'hooks/useFetch'

const CategoryPage = () => {
  const { categoryId } = useParams()
  const {data, error} = useFetch(`getOneCategory/${categoryId}`)

  if (error) return <div>Request Failed</div>; // Error state
	if (!data) return <div>Loading...</div>; // Loading state

  return (
    <PageComponent>
      <Container >
        <Row className="justify-content-center">
          {data.map(item => (
            <Col className="justify-content-center d-flex" key={item._id}>
              <ShopItemComponent item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </PageComponent>
  )
}

export default CategoryPage