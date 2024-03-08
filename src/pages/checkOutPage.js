import React, { useContext, useEffect, useState } from 'react'
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import { useQuery } from '@tanstack/react-query'
import { Button, Form, Col, Row } from 'react-bootstrap'

import PageComponent from 'components/pageComponent'
import CartContext from 'contexts/cartContext/cartContext'
import postFn from 'api/post'

const PUBLIC_KEY = 'APP_USR-7df29120-eea6-4e90-9e5e-42153df7e4e0'

const CheckOutPage = () => {
  const { cartItems } = useContext(CartContext)
  const [validated, setValidated] = useState(false)
  const [formValues, setFormValues] = useState({})

  const { isLoading, isError, data = {} } = useQuery({
    queryKey: [`preference`],
    queryFn: () => postFn({url:`getPreference`, data: {
      cartItems,
      formValues
    }}),
    staleTime: 0,
    enabled: validated
  })

  const { preference } = data
  console.log('preference', preference, validated)
  const preferenceId = preference?.id

  useEffect(() => {
    console.log('initMercadoPago')
    // initMercadoPago('TEST-51c28369-54e5-494d-bfb7-352336e0dc58') // Public key
    initMercadoPago(PUBLIC_KEY) // Public key
  }, [])

  const onSubmit = e => {
    // FUCKING BOOTSTRAP
    e.preventDefault()
    e.stopPropagation()
    
    // setValidated(false)
    // const form = e.currentTarget
    // const isValid = form.checkValidity()
    // console.log('isValid', isValid)

    // const formData = new FormData(form);
    // const values = Object.fromEntries(formData.entries())
    // console.log('values', values)

    // if (isValid)
    //   setFormValues({
    //     ...values,
    //     street_name: `${values.state}, ${values.city}, ${values.street_name}, ${values.street_number}`
    //   })

    // setValidated(isValid)
    // setValidated(true)
  }

  if (isError) return <div>Request Failed</div>; // Error state
	if (isLoading) return <div>Loading...</div>; // Loading state
  // console.count('render')

  return (
    <PageComponent>
      <Form noValidate validated={validated} onSubmit={onSubmit}>
        <Row>
          <Col>
            <h6>Datos Personales</h6>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control required name="name" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Apellidos</Form.Label>
              <Form.Control required name="surname" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control required name="phone_number" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Número de identificación</Form.Label>
              <Form.Control type="number" required name="id_number" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <h6>País: Colombia</h6>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Direccion</Form.Label>
              <Form.Control required name="street_name" placeholder="Calle" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Addicional</Form.Label>
              <Form.Control name="street_number" placeholder="Apartamento, habitacion, etc (opcional)" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Departamento</Form.Label>
              <Form.Control required name="state" placeholder="Caldas" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Municipio</Form.Label>
              <Form.Control required name="city" placeholder="Manizales" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Col>
        </Row>
        
      </Form>
      {/* <Button onClick={onClick} >CLICK</Button> */}
      {preferenceId && <Wallet
        key={PUBLIC_KEY}
        initialization={{ preferenceId }}
        customization={{ texts:{ valueProp: 'smart_option'}}} 
      />}
    </PageComponent>
  )
}

export default CheckOutPage