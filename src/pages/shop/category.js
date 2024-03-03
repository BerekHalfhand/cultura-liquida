import React from 'react'
import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Page from 'components/page'
import Item from 'components/shop/item'
import axios from 'axios'
import useSWR from 'swr'

const fetcher = url => axios.get(url).then(res => res.data);

const CategoryPage = () => {
  const { categoryId } = useParams()
  const {data, error} = useSWR(
		`${process.env.REACT_APP_API_URL}/api/getOne/${categoryId}`,
		fetcher
	)
  console.log('CategoryPage data', data, categoryId)

  if (error) return <div>Request Failed</div>; // Error state
	if (!data) return <div>Loading...</div>; // Loading state

  return (
    <Page>
      <Container >
        <Row className="justify-content-center">
          {data.map(cat => (
            <Col className="justify-content-center d-flex" key={cat._id}>
              <Item {...cat} />
            </Col>
          ))}
        </Row>
      </Container>
    </Page>
  )
}

export default CategoryPage