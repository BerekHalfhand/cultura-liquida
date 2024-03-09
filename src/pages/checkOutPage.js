import React, { useContext, useEffect, useState } from 'react'
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import { useQuery } from '@tanstack/react-query'
import { Button, Form, Input, Col, Row } from 'antd'

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

  const onFinish = (values) => {
    console.log('Success:', values)
    setFormValues({
      ...values,
      street_name: `${values.state}, ${values.city}, ${values.street_name}, ${values.street_number}`
    })
    setValidated(true)
  }

  if (isError) return <div>Request Failed</div>; // Error state
	if (isLoading) return <div>Loading...</div>; // Loading state
  // console.count('render')

  return (
    <PageComponent>
      <Form onFinish={onFinish}>
        <Row>
          <Col>
            <h6>Datos Personales</h6>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Item
              label="Nombre"
              name="name"
              rules={[
                {
                  required: true,
                  message: 'Required!',
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item
              label="Apellidos"
              name="surname"
              rules={[
                {
                  required: true,
                  message: 'Required!',
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Item
              label="Teléfono"
              name="phone_number"
              rules={[
                {
                  required: true,
                  message: 'Required!',
                },
              ]}
            >
              <Input type="number" />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item
              label="Número de identificación"
              name="id_number"
              rules={[
                {
                  required: true,
                  message: 'Required!',
                },
              ]}
            >
              <Input type="number" />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col>
            <h6>País: Colombia</h6>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Item
              label="Direccion"
              name="street_name"
              rules={[
                {
                  required: true,
                  message: 'Required!',
                },
              ]}
            >
              <Input placeholder="Calle" />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item
              label="Addicional"
              name="street_number"
              rules={[
                {
                  required: true,
                  message: 'Required!',
                },
              ]}
            >
              <Input placeholder="Apartamento, habitacion, etc (opcional)" />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Item
              label="Departamento"
              name="state"
              rules={[
                {
                  required: true,
                  message: 'Required!',
                },
              ]}
            >
              <Input placeholder="Caldas" />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item
              label="Municipio"
              name="city"
              rules={[
                {
                  required: true,
                  message: 'Required!',
                },
              ]}
            >
              <Input placeholder="Manizales" />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button type="primary" htmlType="submit">
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