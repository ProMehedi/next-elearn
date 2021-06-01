import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
import {
  HomeOutlined,
  LoginOutlined,
  LogoutOutlined,
  UserAddOutlined,
} from '@ant-design/icons'
import { Container, Nav, Navbar } from 'react-bootstrap'
import ActiveLink from './ActiveLink'
import { logout } from '../store/actions/userActions'

const Topbar = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo, loading } = userLogin

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
            {!userInfo && (
              <>
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
              </>
            )}
            {userInfo && (
              <Nav.Link as='a' onClick={logoutHandler}>
                <LogoutOutlined /> Logout
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Topbar
