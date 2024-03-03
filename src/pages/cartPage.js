import React, { useContext } from 'react'
import PageComponent from 'components/pageComponent'
import CartItemComponent from 'components/cart/cartItemComponent'
import CartContext from 'contexts/cartContext/cartContext'

const CartPage = () => {
  const { cartItems } = useContext(CartContext)

  return (
    <PageComponent>
      {cartItems.length ? (
        cartItems.map(i => (
          <CartItemComponent {...i} />
        ))
      ) : 'Nada por ahora'}
    </PageComponent>
  )
}

export default CartPage