import React, { useContext } from 'react'
import PageComponent from 'components/pageComponent'

// import usePost from 'hooks/usePost'
import CartContext from 'contexts/cartContext/cartContext'
import { useQuery } from '@tanstack/react-query'
import postFn from 'api/post'

const CheckOutPage = () => {
  const { cartItems } = useContext(CartContext)

  const { isLoading, isError, data } = useQuery({
    queryKey: [`total`],
    queryFn: () => postFn({url:`getTotalPrice`, data: cartItems}),
    staleTime: 0
  })

  // const {data, error} = usePost(`getTotalPrice`, cartItems)
  console.log(isLoading, isError, data)

  return (
    <PageComponent>
      <div>check out</div>
    </PageComponent>
  )
}

export default CheckOutPage