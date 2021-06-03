import { HomeOutlined } from '@ant-design/icons'
import { Nav } from 'react-bootstrap'
import ActiveLink from './ActiveLink'

const InstructorNav = () => {
  return (
    <>
      <ActiveLink href='/user'>
        <Nav.Link as='a'>
          <HomeOutlined /> Create Course
        </Nav.Link>
      </ActiveLink>
    </>
  )
}

export default InstructorNav
