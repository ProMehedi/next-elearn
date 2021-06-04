import Jumbotron from '../../components/Jumbotron'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { BeatLoader } from 'react-spinners'

const BecomeInstructorPage = () => {
  const loading = false
  const instructorHandler = () => {
    console.log('Become Instructor!')
  }
  return (
    <>
      <Jumbotron title='Instructor' desc='Become a instructor at E-LE@RN' />
      <Container>
        <Row className='justify-content-center my-5 instructor-page'>
          <Col xl={6} lg={8} md={11}>
            <Card className='text-center'>
              <Card.Body>
                <div className='insIcon'>
                  <i className='fa fa-user-tie'></i>
                </div>
                <h2 className='text-uppercase text-success fw-bold'>
                  Setup payout
                </h2>
                <h5 className='text-uppercase'>
                  to publish courses on E-LE@RN
                </h5>
                <p>
                  E-LE@RN partnets with stripe to transfer earnings to your back
                  account!
                </p>
                <Button
                  size='lg'
                  className='text-uppercase'
                  disabled={loading}
                  onClick={instructorHandler}
                >
                  {loading ? (
                    <>
                      Processing <BeatLoader size={10} color='white' />
                    </>
                  ) : (
                    'Setup Payout Now'
                  )}
                </Button>
                <p className='text-warning mt-2'>
                  You will redirect to stripe to complete the onboarding
                  process.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default BecomeInstructorPage
