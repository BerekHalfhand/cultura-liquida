import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'


import getFn from 'api/get'

import PageComponent from 'components/pageComponent'
import CartItemComponent from 'components/cart/cartItemComponent'
import CartContext from 'contexts/cartContext/cartContext'
// import useGet from 'hooks/useGet'


const getItemsForCart = (allItems, cartItems) => cartItems.map(i => {
  const fullItem = allItems.find(item => item.itemId === i.id)

  return {
    ...fullItem,
    amount: i.amount
  }
})

const CartPage = () => {
  const { cartItems, getTotalPrice } = useContext(CartContext)
  const navigate = useNavigate()

  const { isLoading, isError, data } = useQuery({
    queryKey: [`items`],
    queryFn: () => getFn({url:`getAllItems`})
  })

  // const {data, error} = useGet(`getAllItems`)

  if (isError) return <div>Request Failed</div>; // Error state
	if (isLoading) return <div>Loading...</div>; // Loading state
  console.log('cart data', data)
  const cart = getItemsForCart(data, cartItems)
  console.log('cart', cart)

  return (
    <PageComponent>
      {cart.length ? (
          <div>
            {cart.map(item => (
              <CartItemComponent key={item._id} item={item} />
            ))}
            <div>
              Total: {getTotalPrice(cart)}
            </div>
            <Button variant="primary" onClick={() => navigate('/check-out')}>Check out</Button>
          </div>
      ) : 'Nada por ahora'}
    </PageComponent>
  )
}

export default CartPage