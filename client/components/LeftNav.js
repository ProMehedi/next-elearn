import { Nav } from 'react-bootstrap'
import ActiveLink from './ActiveLink'

const LeftNav = () => {
  return (
    <>
      <Nav variant='pills light' className='ms-auto flex-column'>
        <ActiveLink href='/user'>
          <Nav.Link as='a'>
            <i className='fa fa-home'></i> Dashboard
          </Nav.Link>
        </ActiveLink>
        <ActiveLink href='/user/profile'>
          <Nav.Link as='a'>
            <i className='fa fa-home'></i> My Profile
          </Nav.Link>
        </ActiveLink>
      </Nav>
    </>
  )
}

export default LeftNav
