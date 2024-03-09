import React, { useContext, useMemo } from 'react'
import { Layout, Menu } from 'antd'
import CartContext from 'contexts/cartContext/cartContext'
import { useNavigate } from 'react-router-dom'

const { Header } = Layout
const { Item } = Menu

const HeaderComponent = () => {
  const { itemsCount } = useContext(CartContext)
  // console.log('header', itemsCount)
  const navigate = useNavigate()

  const items = useMemo(() => [
    {
      label: (
        <Item onClick={() => navigate('/')}>
          Inicio
        </Item>
      ),
      key: 'home'
    },
    {
      label: (
        <Item onClick={() => navigate('/shop')}>
          Tienda
        </Item>
      ),
      key: 'shop'
    },
    // {
    //   label: (
    //     <Item onClick={() => navigate('/blog')}>
    //       Blog
    //     </Item>
    //   ),
    //   key: 'blog'
    // },
    {
      label: (
        <Item onClick={() => navigate('/cart')}>
          Carrito {!!itemsCount && `(${itemsCount})`}
        </Item>
      ),
      key: 'cart'
    },
  ], [itemsCount])


  return (
    <Header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Menu
        theme="dark"
        mode="horizontal"
        // defaultSelectedKeys={['2']}
        items={items}
        style={{
          flex: 1,
          minWidth: 0,
        }}
      />
    </Header>
  )
}

export default HeaderComponent