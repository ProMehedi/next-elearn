import { useState } from 'react'
import { Button, Card, Col, Container, Form, Image, Row } from 'react-bootstrap'
import Jumbotron from '../../../components/Jumbotron'
import LeftNav from '../../../components/LeftNav'
import TextEditor from '../../../components/TextEditor'
import ReactPlayer from 'react-player/lazy'

const CreateCoursePage = () => {
  const [title, setTitle] = useState('')
  const [shortDesc, setShortDesc] = useState('')
  const [desc, setDesc] = useState('')
  const [imgUrl, setImgUrl] = useState('')
  const [videoUrl, setVideoUrl] = useState('')

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
                  <Card>
                    <Card.Body>
                      <Card.Title className='border-bottom pb-3 mb-3'>
                        Basic Information
                      </Card.Title>
                      <Form>
                        <Form.Group className='mb-3' controlId='title'>
                          <Form.Label>Course Title</Form.Label>
                          <Form.Control
                            placeholder='Enter Title'
                            type='text'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                          />
                        </Form.Group>
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
                      </Form>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className='mb-3'>
                    <Card.Body>
                      <Card.Title className='border-bottom pb-3 mb-3'>
                        Preview Video
                      </Card.Title>
                      <Form.Group class='mb-3'>
                        {videoUrl && (
                          <ReactPlayer
                            controls
                            width='100%'
                            height='100%'
                            url={videoUrl}
                          />
                        )}
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Video URL</Form.Label>
                        <Form.Control
                          placeholder='Enter Video URL'
                          type='text'
                          value={videoUrl}
                          onChange={(e) => setVideoUrl(e.target.value)}
                        />
                      </Form.Group>
                    </Card.Body>
                  </Card>
                  <Card className='mb-3'>
                    <Card.Body>
                      <Card.Title className='border-bottom pb-3 mb-3'>
                        Featured Image
                      </Card.Title>
                      <Form.Group class='mb-3'>
                        <div class='customFileUpload mb-1 border rounded'>
                          <img id='image' src={imgUrl} />
                          <div
                            class='customFileUploadBtn'
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
                      <Form.Group>
                        <Form.Label>Image URL</Form.Label>
                        <Form.Control
                          placeholder='Enter Image URL'
                          type='text'
                          value={imgUrl}
                          onChange={(e) => setImgUrl(e.target.value)}
                        />
                      </Form.Group>
                    </Card.Body>
                  </Card>
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
