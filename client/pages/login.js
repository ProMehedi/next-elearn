import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BeatLoader } from 'react-spinners'
import { Col, Container, Row, Card, Form, Button } from 'react-bootstrap'
import Jumbotron from '../components/Jumbotron'
import { toast } from 'react-toastify'
import { login } from '../store/actions/userActions'
import PageLoader from '../components/PageLoader'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const router = useRouter()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo, loading, error } = userLogin

  useEffect(() => {
    if (userInfo && userInfo !== null) {
      router.push('/')
    }
    if (error) {
      toast.error(error)
    }
  }, [userInfo, error])

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validations
    if (!email) {
      toast.error('Email is required!')
      return false
    }
    if (!password) {
      toast.error('Password is required!')
      return false
    }

    dispatch(login(email, password))
  }

  if (loading) {
    return <PageLoader />
  }

  return (
    <>
      <Jumbotron title='Login' desc='Login to your account' />
      <Container>
        <Row className='justify-content-center my-5'>
          <Col xl={4} lg={5} md={6} sm={8}>
            <Card>
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className='mb-3' controlId='email'>
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control
                      placeholder='Enter Email'
                      type='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className='mb-3' controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      placeholder='Enter Password'
                      type='password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>
                  <Button
                    type='submit'
                    className='d-block w-100'
                    disabled={loading}
                  >
                    LOGIN {loading && <BeatLoader size={10} color='white' />}
                  </Button>
                </Form>
              </Card.Body>
            </Card>
            <p className='text-center text-muted mt-3 mb-1'>
              Forgot your password?{' '}
              <Link href='/forgot-password'>
                <a className='text-danger'>Reset Now!</a>
              </Link>
            </p>
            <p className='text-center text-success mb-3'>
              Dont have an account? <Link href='/register'>Register</Link>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default LoginPage
