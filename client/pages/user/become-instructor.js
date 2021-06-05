import Link from 'next/link'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { BeatLoader, ScaleLoader } from 'react-spinners'
import { Col, Container, Row, Card, Form, Button, Alert } from 'react-bootstrap'
import Jumbotron from '../../components/Jumbotron'
import { toast } from 'react-toastify'

const BecomeInstructorPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [about, setAbout] = useState('')
  const [bkash, setBkash] = useState('')

  const dispatch = useDispatch()
  const router = useRouter()

  const userRegister = useSelector((state) => state.userRegister)
  const { loading: loadingRegister, error } = userRegister

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo, loading } = userLogin

  const userDetails = useSelector((state) => state.userDetails)
  const { user } = userDetails

  useEffect(() => {
    if (userInfo && user.role === 'Instructor') {
      router.push('/')
    } else {
      if (user) {
        setName(user.name)
        setEmail(user.email)
      }

      if (error) {
        toast.error(error)
      }
    }
  }, [userInfo, error, user])

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validations
    if (!name) {
      toast.error('Name is required!')
      return false
    }
    if (!email) {
      toast.error('Email is required!')
      return false
    }
    if (!phone) {
      toast.error('Phone Number is required!')
      return false
    }
    if (!address) {
      toast.error('Address is required!')
      return false
    }

    // dispatch(register(name, email, password))
  }

  if (loading) {
    return <ScaleLoader size={50} />
  }

  if (user.account_status !== 'verified') {
    return (
      <>
        <Jumbotron
          title='Become Instructor'
          desc='Fillout this form to register as an instructor'
        />
        <Container>
          <Row className='justify-content-center my-5'>
            <Col xl={5} lg={6} md={7} sm={10}>
              <Card className='text-center'>
                <Card.Body>
                  <div className='insIcon'>
                    <i className='fa fa-user-tie'></i>
                  </div>
                  <Alert variant='danger'>
                    Plz verify your account to continue
                  </Alert>
                  <Link href='/user/verify'>
                    <Button
                      size='lg'
                      className='text-uppercase mb-3'
                      disabled={loading}
                    >
                      VERIFY NOW
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    )
  }

  return (
    <>
      <Jumbotron
        title='Become Instructor'
        desc='Fillout this form to register as an instructor'
      />
      <Container>
        <Row className='justify-content-center my-5'>
          <Col xl={4} lg={5} md={6} sm={8}>
            <Card>
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className='mb-3' controlId='name'>
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control
                      placeholder='Enter Name'
                      type='text'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className='mb-3' controlId='email'>
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control
                      disabled
                      placeholder='Enter Email'
                      type='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className='mb-3' controlId='phone'>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      placeholder='Enter Phone Number'
                      type='tel'
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className='mb-3' controlId='bkash'>
                    <Form.Label>Bkash Number</Form.Label>
                    <Form.Control
                      placeholder='Enter Bkash Number'
                      type='tel'
                      value={bkash}
                      onChange={(e) => setBkash(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className='mb-3' controlId='address'>
                    <Form.Label>Your Address</Form.Label>
                    <Form.Control
                      as='textarea'
                      rows={2}
                      placeholder='Enter Full Address'
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className='mb-3' controlId='about'>
                    <Form.Label>Your Bio</Form.Label>
                    <Form.Control
                      as='textarea'
                      rows={4}
                      placeholder='Write About Yourself'
                      value={about}
                      onChange={(e) => setAbout(e.target.value)}
                    />
                  </Form.Group>
                  <Button
                    type='submit'
                    className='d-block w-100'
                    disabled={loadingRegister}
                  >
                    REGISTER{' '}
                    {loadingRegister && <BeatLoader size={10} color='white' />}
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default BecomeInstructorPage
