import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Page from 'components/page'
import Category from 'components/shop/category'

const CATEGORIES = [
  {
    title: 'Esporas',
    link: 'shop/spores',
    image: 'img/spores.webp',
    description: 'Esporas de hongos, impresiones y jeringas'
  },
  {
    title: 'Kits de cultivo',
    link: 'shop/kits',
    image: 'img/kit.jpg',
    description: 'Kits preparados para cultivar setas en casa'
  }
]

const Shop = () => {
  return (
    <Page>
      <Container>
        <Row className="justify-content-md-center">
          {CATEGORIES.map(cat => (
            <Col>
              <Category {...cat} />
            </Col>
          ))}
        </Row>
      </Container>
    </Page>
  )
}

export default Shop