import React, { useContext } from 'react'
import PageComponent from 'components/pageComponent'
import CartItemComponent from 'components/cart/cartItemComponent'
import CartContext from 'contexts/cartContext/cartContext'
import useFetch from 'hooks/useFetch'

const getItemsForCart = (allItems, cartItems) => cartItems.map(i => {
  const fullItem = allItems.find(item => item.itemId === i.id)

  return {
    ...fullItem,
    amount: i.amount
  }
})

const CartPage = () => {
  const { cartItems } = useContext(CartContext)
  const {data, error} = useFetch(`getAllItems`)

  if (error) return <div>Request Failed</div>; // Error state
	if (!data) return <div>Loading...</div>; // Loading state
  console.log('cart data', data)
  const cart = getItemsForCart(data, cartItems)
  console.log('cart', cart)

  return (
    <PageComponent>
      {cart.length ? (
        cart.map(item => (
          <CartItemComponent item={item} />
        ))
      ) : 'Nada por ahora'}
    </PageComponent>
  )
}

export default CartPage