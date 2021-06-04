import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { BeatLoader } from 'react-spinners'
import { toast } from 'react-toastify'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import Jumbotron from '../../components/Jumbotron'
import { payoutInstructor } from '../../store/actions/instructorActions'

const BecomeInstructorPage = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  const instructorPayout = useSelector((state) => state.instructorPayout)
  const { payout, loading, error } = instructorPayout

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (!userInfo || userInfo === null) {
      router.push('/login')
    }
    if (error) {
      toast.error(error)
    }
  }, [router, userInfo, error])

  const instructorHandler = () => {
    dispatch(payoutInstructor())
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
