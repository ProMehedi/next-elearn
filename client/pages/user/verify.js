import Link from 'next/link'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { BeatLoader, ScaleLoader } from 'react-spinners'
import { Col, Container, Row, Card, Form, Button, Alert } from 'react-bootstrap'
import { toast } from 'react-toastify'
import Jumbotron from '../../components/Jumbotron'

const RegisterPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [code, setCode] = useState('')

  const dispatch = useDispatch()
  const router = useRouter()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo, loading } = userLogin

  const userDetails = useSelector((state) => state.userDetails)
  const { user, error } = userDetails

  useEffect(() => {
    if ((userInfo && user === 'varified') || !user.name) {
      router.push('/')
    } else {
      setName(user.name)
      setEmail(user.email)
    }
    if (error) {
      toast.error(error)
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

    // dispatch(register(name, email, password))
  }

  if (loading) {
    return <ScaleLoader size={50} />
  }

  return (
    <>
      <Jumbotron title='Vefiry' desc='Use code to verify your account' />
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
                      disabled
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className='mb-3' controlId='email'>
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control
                      placeholder='Enter Email'
                      type='email'
                      value={email}
                      disabled
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className='mb-3' controlId='code'>
                    <Form.Label>Verification Code</Form.Label>
                    <Form.Control
                      placeholder='Enter Code'
                      type='text'
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                    />
                  </Form.Group>
                  <Button
                    type='submit'
                    className='d-block w-100'
                    disabled={loading}
                  >
                    VERIFY ACCOUNT{' '}
                    {loading && <BeatLoader size={10} color='white' />}
                  </Button>
                </Form>
              </Card.Body>
            </Card>
            <p className='text-center my-3'>
              Already have an verified account? <Link href='/login'>Login</Link>{' '}
            </p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default RegisterPage
