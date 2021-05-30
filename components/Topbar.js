import { useState } from 'react'
import Link from 'next/link'
import { Menu } from 'antd'
import { HomeOutlined, LoginOutlined, UserAddOutlined } from '@ant-design/icons'
import { Container } from 'react-bootstrap'

const Topbar = () => {
  const [current, setCurrent] = useState('home')

  const handleClick = (e) => {
    setCurrent(e.key)
  }
  return (
    <Container>
      <Menu onClick={handleClick} selectedKeys={[current]} mode='horizontal'>
        <Menu.Item key='home' icon={<HomeOutlined />}>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </Menu.Item>
        <Menu.Item key='login' icon={<LoginOutlined />}>
          <Link href='/login'>
            <a>Login</a>
          </Link>
        </Menu.Item>
        <Menu.Item key='register' icon={<UserAddOutlined />}>
          <Link href='/register'>
            <a>Register</a>
          </Link>
        </Menu.Item>
      </Menu>
    </Container>
  )
}

export default Topbar
