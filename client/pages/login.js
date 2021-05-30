import Link from 'next/link'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BeatLoader } from 'react-spinners'
import { Col, Container, Row, Card, Form, Button, Alert } from 'react-bootstrap'
import Jumbotron from '../components/Jumbotron'
import { toast } from 'react-toastify'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validations
    if (!email) {
      setMessage('Email is required!')
      return false
    }
    if (!password) {
      setMessage('Password is required!')
      return false
    }

    setLoading(true)

    try {
      const { data } = await axios.post(`api/users`, {
        email,
        password,
      })
      setMessage('')
      setLoading(false)
      toast.success('Login successful!')
      console.log(data)
    } catch (error) {
      setMessage(error.response.statusText)
      setLoading(false)
    }
  }

  useEffect(() => {
    if (message) {
      toast.error(message)
    }
  }, [message])

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
            <p className='text-center my-3'>
              Dont have an account? <Link href='/register'>Register</Link>{' '}
            </p>
            {message && (
              <div className='my-3'>
                <Alert variant='danger'>{message}</Alert>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default LoginPage
