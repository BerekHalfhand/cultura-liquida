import React, { useContext } from 'react'
import Page from 'components/page'
import CartContext from 'contexts/cartContext/cartContext'

const Cart = () => {
  const { cartItems } = useContext(CartContext)

  return (
    <Page>
      {!!cartItems.length ? (
        cartItems.map(i => (
          <div>
            {i.id} - {i.amount}
          </div>
        ))
      ) : 'Nada por ahora'}
    </Page>
  )
}

export default Cart