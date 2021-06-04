import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import ActiveLink from './ActiveLink'
import { getUserDetails, logout } from '../store/actions/userActions'
import PageLoader from './PageLoader'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const Topbar = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userDetails = useSelector((state) => state.userDetails)
  const { user, loading } = userDetails

  useEffect(() => {
    if (userInfo) {
      if (!user.name) {
        dispatch(getUserDetails('profile'))
      }
    }
  }, [router, userInfo, user])

  const logoutHandler = (e) => {
    dispatch(logout())
  }

  if (loading) {
    return <PageLoader />
  }

  return (
    <>
      <Navbar
        expand='lg'
        fixed='top'
        bg='white'
        className='shadow'
        collapseOnSelect
      >
        <Container>
          <Navbar.Brand>
            <Link href='/'>E-LE@RN</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav variant='pills' className='ms-auto align-items-center'>
              <ActiveLink href='/'>
                <Nav.Link as='a'>
                  <i className='fa fa-home'></i> Home
                </Nav.Link>
              </ActiveLink>
              {!userInfo && (
                <>
                  <ActiveLink href='/login'>
                    <Nav.Link as='a'>
                      <i className='fas fa-sign-in-alt'></i> Login
                    </Nav.Link>
                  </ActiveLink>
                  <ActiveLink href='/register'>
                    <Nav.Link as='a'>
                      <i className='fas fa-user-plus'></i> Register
                    </Nav.Link>
                  </ActiveLink>
                </>
              )}
              {userInfo && (
                <>
                  <NavDropdown title={userInfo.user.name} id='user' alignRight>
                    <ActiveLink href='/user'>
                      <NavDropdown.Item as='a'>
                        <i className='fa fa-sign-out-alt'></i> Dashboard
                      </NavDropdown.Item>
                    </ActiveLink>
                    <ActiveLink href='/user/profile'>
                      <NavDropdown.Item as='a'>
                        <i className='fa fa-user'></i> My Profile
                      </NavDropdown.Item>
                    </ActiveLink>
                    <NavDropdown.Item onClick={logoutHandler}>
                      <i className='fa fa-sign-out-alt'></i> Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              )}
              {user && user.role && user.role.includes('Instructor') ? (
                <Link href='/instructor/courses/create'>
                  <Nav.Link as='a'>
                    <Button variant='success'>
                      <i className='fas fa-user-plus'></i> Create Course
                    </Button>
                  </Nav.Link>
                </Link>
              ) : (
                <Link href='/user/become-a-instructor'>
                  <Nav.Link as='a'>
                    <Button variant='success'>
                      <i className='far fa-calendar-check'></i> Become a
                      Instructor
                    </Button>
                  </Nav.Link>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div style={{ minHeight: '63px' }}></div>
    </>
  )
}

export default Topbar
