import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BeatLoader, ScaleLoader } from 'react-spinners'
import { toast } from 'react-toastify'
import { Col, Container, Row, Card, Form, Button } from 'react-bootstrap'
import Jumbotron from '../components/Jumbotron'
import { forgotPassword } from '../store/actions/userActions'

const ForgotPassPage = () => {
  const [email, setEmail] = useState('')
  const [code, setCode] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPass, setConfirmPass] = useState('')

  const dispatch = useDispatch()
  const router = useRouter()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo, loading } = userLogin

  const passReset = useSelector((state) => state.passReset)
  const { success, loading: loadingReset, error } = passReset

  useEffect(() => {
    if (userInfo) {
      router.push('/')
    } else {
      if (error) {
        toast.error(error)
      }
    }
  }, [userInfo, error])

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validations
    if (!email) {
      toast.error('Email is required!')
      return false
    }

    dispatch(forgotPassword(email))
  }

  const handleReset = (e) => {
    e.preventDefault()

    // Validations
    if (!code) {
      toast.error('Code is required!')
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

    // dispatch(resetPassword(email, code, password))
    console.log('Rest Password!')
  }

  if (loading) {
    return <ScaleLoader size={50} />
  }

  return (
    <>
      <Jumbotron
        title='Forgot Password'
        desc='Reset your account password now'
      />
      <Container>
        <Row className='justify-content-center my-5'>
          <Col xl={4} lg={5} md={6} sm={8}>
            <Card>
              <Card.Body>
                <Form onSubmit={success ? handleReset : handleSubmit}>
                  <Form.Group className='mb-3' controlId='email'>
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control
                      placeholder='Enter Email'
                      type='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={success}
                    />
                  </Form.Group>
                  {success && (
                    <>
                      <Form.Group className='mb-3' controlId='code'>
                        <Form.Label>Confimation Code</Form.Label>
                        <Form.Control
                          placeholder='Enter Code'
                          type='text'
                          value={code}
                          onChange={(e) => setCode(e.target.value)}
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
                          placeholder='Enter Password'
                          type='password'
                          value={confirmPass}
                          onChange={(e) => setConfirmPass(e.target.value)}
                        />
                      </Form.Group>
                    </>
                  )}
                  <Button
                    type='submit'
                    className='d-block w-100'
                    disabled={loading}
                  >
                    RESET {success ? 'NOW' : 'PASSWORD'}{' '}
                    {loading ||
                      (loadingReset && <BeatLoader size={10} color='white' />)}
                  </Button>
                </Form>
              </Card.Body>
            </Card>
            <p className='text-center text-success my-3'>
              Dont have an account? <Link href='/register'>Register</Link>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ForgotPassPage
