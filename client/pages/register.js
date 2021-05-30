import { useEffect, useState } from 'react'
import axios from 'axios'
import { BeatLoader, ClipLoader } from 'react-spinners'
import { Col, Container, Row, Card, Form, Button, Alert } from 'react-bootstrap'
import Jumbotron from '../components/Jumbotron'
import { toast } from 'react-toastify'

const RegisterPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPass, setConfirmPass] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validations
    if (!name) {
      setMessage('Name is required!')
      return false
    }
    if (!email) {
      setMessage('Email is required!')
      return false
    }
    if (!password) {
      setMessage('Password is required!')
      return false
    }
    if (password.length < 6) {
      setMessage("Password can't be less than 6 characters!")
      return false
    }
    if (password.length > 65) {
      setMessage("Password can't be longer than 65 characters!")
      return false
    }
    if (password != confirmPass) {
      setMessage('Password not match!')
      return false
    }

    setLoading(true)

    try {
      const { data } = await axios.post(`api/users`, {
        name,
        email,
        password,
      })
      setMessage('')
      setLoading(false)
      toast.success('Registration successful!')
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
                    disabled={loading}
                  >
                    REGISTER {loading && <BeatLoader size={10} color='white' />}
                  </Button>
                </Form>
              </Card.Body>
            </Card>
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

export default RegisterPage
