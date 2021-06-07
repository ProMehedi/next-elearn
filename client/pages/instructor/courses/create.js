import { useEffect, useState } from 'react'
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Image,
  InputGroup,
  Row,
} from 'react-bootstrap'
import Jumbotron from '../../../components/Jumbotron'
import LeftNav from '../../../components/LeftNav'
import TextEditor from '../../../components/TextEditor'
import ReactPlayer from 'react-player/lazy'
import CustomCard from '../../../components/CustomCard'
import CustomInput from '../../../components/CustomInput'

const CreateCoursePage = () => {
  const [title, setTitle] = useState('')
  const [shortDesc, setShortDesc] = useState('')
  const [desc, setDesc] = useState('')
  const [videoUrl, setVideoUrl] = useState('')
  const [price, setPrice] = useState(9.99)
  const [priceStatus, setPriceStatus] = useState(false)
  const [category, setCategory] = useState('')
  const [duration, setDuration] = useState('')
  const [imgUrl, setImgUrl] = useState('')

  useEffect(() => {
    console.log(priceStatus)
  }, [priceStatus])

  const uploadImageHandler = (e) => {
    let file = e.target.files[0]
    var reader = new FileReader()

    reader.onload = function (e) {
      setImgUrl(e.target.result)
    }

    reader.readAsDataURL(file)
  }

  const fileInputHandler = () => {
    document.getElementById('fileInput').click()
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
            <Container>
              <Row className='justify-content-center align-items-center mt-4 mb-3'>
                <Col md={8}>
                  <h2>Edit Course</h2>
                </Col>
                <Col md={4} className='text-right'>
                  <Button variant='primary' size='lg'>
                    SAVE COURSE
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col md={8}>
                  <CustomCard title='Basic Information' classes='mb-3'>
                    <CustomInput
                      label='Course Title'
                      placeholder='Enter Title'
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                    <Form.Group className='mb-3' controlId='desc'>
                      <Form.Label>Course Description</Form.Label>
                      <TextEditor desc={desc} setDesc={setDesc} />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='shortDesc'>
                      <Form.Label>Course Short Description</Form.Label>
                      <Form.Control
                        as='textarea'
                        rows={3}
                        placeholder='Write About Your Course'
                        value={shortDesc}
                        onChange={(e) => setShortDesc(e.target.value)}
                      />
                    </Form.Group>
                  </CustomCard>

                  <CustomCard title='Lessons' classes='mb-3'>
                    <CustomInput
                      label='Course Title'
                      placeholder='Enter Title'
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </CustomCard>
                </Col>
                <Col md={4}>
                  <CustomCard title='Preview Video' classes='mb-3'>
                    <Form.Group className='mb-3'>
                      {videoUrl && (
                        <ReactPlayer
                          controls
                          width='100%'
                          height='100%'
                          url={videoUrl}
                        />
                      )}
                    </Form.Group>
                    <CustomInput
                      classes='mb-0'
                      label='Video URL'
                      placeholder='Enter Video URL'
                      value={videoUrl}
                      onChange={(e) => setVideoUrl(e.target.value)}
                    />
                  </CustomCard>

                  <Card className='mb-3'>
                    <Card.Body>
                      <Card.Title
                        className={
                          priceStatus ? 'mb-0' : 'border-bottom pb-3 mb-3'
                        }
                      >
                        <Row className='align-items-center'>
                          <Col>Couse Price</Col>
                          <Col>
                            <div className='onoffswitch ms-auto'>
                              <input
                                type='checkbox'
                                name='onoffswitch'
                                className='onoffswitch-checkbox'
                                id='myonoffswitch'
                                tabIndex='1'
                                checked={priceStatus}
                                onChange={(e) =>
                                  setPriceStatus(e.target.checked)
                                }
                              />
                              <label
                                className='onoffswitch-label'
                                htmlFor='myonoffswitch'
                              >
                                <span className='onoffswitch-inner'></span>
                                <span className='onoffswitch-switch'></span>
                              </label>
                            </div>
                          </Col>
                        </Row>
                      </Card.Title>
                      {!priceStatus && (
                        <InputGroup>
                          <InputGroup.Text>Price ( $ )</InputGroup.Text>
                          <Form.Control
                            placeholder='Enter Course Price'
                            type='number'
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            min={9.99}
                          />
                        </InputGroup>
                      )}
                    </Card.Body>
                  </Card>

                  <CustomCard title='Course Meta' classes='mb-3'>
                    <Form.Group className='mb-3'>
                      <Form.Label>Category</Form.Label>
                      <Form.Control
                        className='form-select'
                        as='select'
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                      >
                        <option value=''>--- SELECT CATEGORY ---</option>
                        <option value='cat1'>Category 1</option>
                        <option value='cat2'>Category 2</option>
                        <option value='cat3'>Category 3</option>
                      </Form.Control>
                    </Form.Group>
                    <CustomInput
                      classes='mb-0'
                      type='number'
                      label='Duration (00:00:00)'
                      placeholder='Total Course Duration'
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                    />
                  </CustomCard>

                  <CustomCard title='Featured Image' classes='mb-3'>
                    <Form.Group className='mb-3'>
                      <div className='customFileUpload mb-1 border rounded'>
                        <img id='image' src={imgUrl} />
                        <div
                          className='customFileUploadBtn'
                          onClick={fileInputHandler}
                        >
                          <button type='button'>
                            <i className='fa fa-cloud-upload-alt'></i>
                          </button>
                        </div>
                      </div>
                      <input
                        name='photo'
                        id='fileInput'
                        accept='image/*'
                        type='file'
                        onChange={uploadImageHandler}
                      />
                    </Form.Group>
                    <CustomInput
                      classes='mb-0'
                      label='Image URL'
                      placeholder='Enter Image URL'
                      value={imgUrl}
                      onChange={(e) => setImgUrl(e.target.value)}
                    />
                  </CustomCard>
                </Col>
              </Row>
            </Container>
          </div>
        </main>
      </div>
    </>
  )
}

export default CreateCoursePage
