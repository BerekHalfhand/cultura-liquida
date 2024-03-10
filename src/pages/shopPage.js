import React from 'react'
import PageComponent from 'components/pageComponent'
import ShopCategoryComponent from 'components/shop/shopCategoryComponent'

import { useQuery } from '@tanstack/react-query'

import getFn from 'api/get'

const ShopPage = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ['categories'],
    queryFn: () => getFn({url:'getAllCategories'})
  })


  if (isError) return <div>Request Failed</div>; // Error state
	if (isLoading) return <div>Loading...</div>; // Loading state

  return (
    <PageComponent>
      <div className='shop-grid'>
        {data.map(cat => (
          <ShopCategoryComponent key={cat._id} {...cat} />
        ))}
      </div>
    </PageComponent>
  )
}

export default ShopPage