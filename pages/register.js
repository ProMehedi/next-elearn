import { Col, Container, Row, Card, Form, Button } from 'react-bootstrap'
import Jumbotron from '../components/Jumbotron'

const RegisterPage = () => {
  return (
    <>
      <Jumbotron title='Register' desc='Register for a new account' />
      <Container>
        <Row className='justify-content-center my-5'>
          <Col xl={4} lg={5} md={6} sm={8}>
            <Card>
              <Card.Body>
                <Form>
                  <Form.Group className='mb-3'>
                    <Form.Control placeholder='Enter Name' />
                  </Form.Group>
                  <Form.Group className='mb-3'>
                    <Form.Control placeholder='Enter Email' />
                  </Form.Group>
                  <Form.Group className='mb-3'>
                    <Form.Control placeholder='Enter Password' />
                  </Form.Group>
                  <Form.Group className='mb-3'>
                    <Form.Control placeholder='Confirm Password' />
                  </Form.Group>
                  <Button className='d-block w-100'>Register</Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default RegisterPage
