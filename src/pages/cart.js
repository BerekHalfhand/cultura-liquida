import React, { useContext } from 'react'
import Page from 'components/page'
import CartContext from 'contexts/cartContext/cartContext'

const Cart = () => {
  const { cartItems } = useContext(CartContext)
  return (
    <Page>
      <div>cart sweet cart</div>
    </Page>
  )
}

export default Cart