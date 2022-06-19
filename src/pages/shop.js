import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Page from 'components/page'
import Category from 'components/shop/category'
import axios from 'axios'
import useSWR from 'swr'

const fetcher = url => axios.get(url).then(res => res.data);

const Shop = () => {
  const {data, error} = useSWR(
		`${process.env.REACT_APP_API_URL}/api/getAll`,
		fetcher
	)

  if (error) return <div>Request Failed</div>; // Error state
	if (!data) return <div>Loading...</div>; // Loading state
  console.log('data', data)

  return (
    <Page>
      <Container >
        <Row className="justify-content-center">
          {data.map(cat => (
            <Col className="justify-content-center d-flex" key={cat._id}>
              <Category {...cat} />
            </Col>
          ))}
        </Row>
      </Container>
    </Page>
  )
}

export default Shop