import Link from 'next/link'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { BeatLoader, ScaleLoader } from 'react-spinners'
import { Col, Container, Row, Card, Form, Button, Alert } from 'react-bootstrap'
import Jumbotron from '../components/Jumbotron'
import { toast } from 'react-toastify'
import { register } from '../store/actions/userActions'

const RegisterPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPass, setConfirmPass] = useState('')

  const dispatch = useDispatch()
  const router = useRouter()

  const userRegister = useSelector((state) => state.userRegister)
  const { loading: loadingRegister, error } = userRegister

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo, loading } = userLogin

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
    if (!name) {
      toast.error('Name is required!')
      return false
    }
    if (!email) {
      toast.error('Email is required!')
      return false
    }
    if (!password) {
      toast.error('Password is required!')
      return false
    }
    if (password.length < 6) {
      toast.error("Password can't be less than 6 characters!")
      return false
    }
    if (password.length > 65) {
      toast.error("Password can't be longer than 65 characters!")
      return false
    }
    if (password != confirmPass) {
      toast.error('Password not match!')
      return false
    }

    dispatch(register(name, email, password))
  }

  if (loading) {
    return <ScaleLoader size={50} />
  }

  return (
    <>
      <Jumbotron title='Register' desc='Register for a new account' />
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
                  <Form.Group className='mb-3' controlId='confirmPass'>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      placeholder='Confirm Password'
                      type='password'
                      value={confirmPass}
                      onChange={(e) => setConfirmPass(e.target.value)}
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
            <p className='text-center my-3'>
              Already have an account? <Link href='/login'>Login</Link>{' '}
            </p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default RegisterPage
