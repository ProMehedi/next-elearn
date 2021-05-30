import react from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { HomeOutlined, LoginOutlined, UserAddOutlined } from '@ant-design/icons'
import { Container, Nav, Navbar } from 'react-bootstrap'
import ActiveLink from './ActiveLink'

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
            <ActiveLink href='/'>
              <Nav.Link as='a'>
                <HomeOutlined /> Home
              </Nav.Link>
            </ActiveLink>
            <ActiveLink href='/login'>
              <Nav.Link as='a'>
                <LoginOutlined /> Login
              </Nav.Link>
            </ActiveLink>
            <ActiveLink href='/register'>
              <Nav.Link as='a'>
                <UserAddOutlined /> Register
              </Nav.Link>
            </ActiveLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Topbar
