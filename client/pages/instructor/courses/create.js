import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { BeatLoader } from 'react-spinners'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import Jumbotron from '../../../components/Jumbotron'
import LeftNav from '../../../components/LeftNav'
import { COURSE_CREATE_RESET } from '../../../store/constants/courseConstants'
import CourseForm from '../../../components/forms/CourseForm'
import { createCourse } from '../../../store/actions/courseActions'

const CreateCoursePage = () => {
  const [course, setCourse] = useState({
    name: '',
    slug: '',
    desc: '',
    shortDesc: '',
    videoUrl: '',
    price: 9.99,
    paid: true,
    category: '',
    duration: '',
    imgUrl: '',
    imgName: '',
  })

  const dispatch = useDispatch()

  const courseCreate = useSelector((state) => state.courseCreate)
  const { loading, success, error } = courseCreate

  useEffect(() => {
    if (success) {
      toast.success('Course Created Successfully!')
      dispatch({ type: COURSE_CREATE_RESET })
    }
    if (error) {
      toast.error(error)
    }
  }, [success, error])

  const submitHandler = (e) => {
    e.preventDefault()

    // Validations
    if (!course.name) {
      toast.error('Name is required!')
      return false
    }
    if (course.name.length < 5) {
      toast.error('Minimum 5 characters required for Name!')
      return false
    }
    if (!course.videoUrl) {
      toast.error('Video URL is required!')
      return false
    }
    if (!course.category) {
      toast.error('Category is required!')
      return false
    }
    if (!course.imgUrl) {
      toast.error('Image is required!')
      return false
    }

    console.log(course)
    dispatch(createCourse(course))
  }

  return (
    <>
      <div className='admin active'>
        <div className='leftNav'>
          <LeftNav />
        </div>
        <main className='mainContent'>
          <Jumbotron
            title='Create Course'
            desc='Create New Course at E-LE@RN'
          />
          <div className='pageContent'>
            <Form onSubmit={submitHandler}>
              <Container>
                <Row className='justify-content-center align-items-center mt-4 mb-3'>
                  <Col md={8}>
                    <h2>Edit Course</h2>
                  </Col>
                  <Col md={4} className='text-right'>
                    <Button
                      type='submit'
                      variant='primary'
                      size='lg'
                      disabled={loading}
                    >
                      SAVE COURSE{' '}
                      {loading && <BeatLoader size={10} color='white' />}
                    </Button>
                  </Col>
                </Row>
                <CourseForm course={course} setCourse={setCourse} />
              </Container>
            </Form>
          </div>
        </main>
      </div>
    </>
  )
}

export default CreateCoursePage
