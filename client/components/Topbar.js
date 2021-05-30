import { useState } from 'react'
import Link from 'next/link'
import { HomeOutlined, LoginOutlined, UserAddOutlined } from '@ant-design/icons'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Topbar = () => {
  const [current, setCurrent] = useState('home')

  const handleClick = (e) => {
    setCurrent(e.key)
  }
  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <Navbar.Brand>
          <Link href='/'>E-LE@RN</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Link href='/'>
              <a className='nav-link'>
                <HomeOutlined /> Home
              </a>
            </Link>
            <Link href='/login'>
              <a className='nav-link'>
                <LoginOutlined /> Login
              </a>
            </Link>
            <Link href='/register'>
              <a className='nav-link'>
                <UserAddOutlined /> Register
              </a>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Topbar
