import { useState } from 'react'
import { useDispatch } from 'react-redux'
import Link from 'next/link'
import { HomeOutlined, LoginOutlined, UserAddOutlined } from '@ant-design/icons'
import { Container, Nav, Navbar } from 'react-bootstrap'
import ActiveLink from './ActiveLink'
import { logout } from '../store/actions/userActions'

const Topbar = () => {
  const dispatch = useDispatch()

  const logoutHandler = (e) => {
    dispatch(logout())
  }
  return (
    <Navbar expand='lg'>
      <Container>
        <Navbar.Brand>
          <Link href='/'>E-LE@RN</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav variant='pills' className='ms-auto'>
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
            <Nav.Link className='active' as='a' onClick={logoutHandler}>
              <UserAddOutlined /> Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Topbar
