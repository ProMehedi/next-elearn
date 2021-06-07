import { useEffect, useState } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
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

  const list = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
          lat: '-37.3159',
          lng: '81.1496',
        },
      },
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
      company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets',
      },
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      address: {
        street: 'Victor Plains',
        suite: 'Suite 879',
        city: 'Wisokyburgh',
        zipcode: '90566-7771',
        geo: {
          lat: '-43.9509',
          lng: '-34.4618',
        },
      },
      phone: '010-692-6593 x09125',
      website: 'anastasia.net',
      company: {
        name: 'Deckow-Crist',
        catchPhrase: 'Proactive didactic contingency',
        bs: 'synergize scalable supply-chains',
      },
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      address: {
        street: 'Douglas Extension',
        suite: 'Suite 847',
        city: 'McKenziehaven',
        zipcode: '59590-4157',
        geo: {
          lat: '-68.6102',
          lng: '-47.0653',
        },
      },
      phone: '1-463-123-4447',
      website: 'ramiro.info',
      company: {
        name: 'Romaguera-Jacobson',
        catchPhrase: 'Face to face bifurcated interface',
        bs: 'e-enable strategic applications',
      },
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      address: {
        street: 'Hoeger Mall',
        suite: 'Apt. 692',
        city: 'South Elvis',
        zipcode: '53919-4257',
        geo: {
          lat: '29.4572',
          lng: '-164.2990',
        },
      },
      phone: '493-170-9623 x156',
      website: 'kale.biz',
      company: {
        name: 'Robel-Corkery',
        catchPhrase: 'Multi-tiered zero tolerance productivity',
        bs: 'transition cutting-edge web services',
      },
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      address: {
        street: 'Skiles Walks',
        suite: 'Suite 351',
        city: 'Roscoeview',
        zipcode: '33263',
        geo: {
          lat: '-31.8129',
          lng: '62.5342',
        },
      },
      phone: '(254)954-1289',
      website: 'demarco.info',
      company: {
        name: 'Keebler LLC',
        catchPhrase: 'User-centric fault-tolerant solution',
        bs: 'revolutionize end-to-end systems',
      },
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      address: {
        street: 'Norberto Crossing',
        suite: 'Apt. 950',
        city: 'South Christy',
        zipcode: '23505-1337',
        geo: {
          lat: '-71.4197',
          lng: '71.7478',
        },
      },
      phone: '1-477-935-8478 x6430',
      website: 'ola.org',
      company: {
        name: 'Considine-Lockman',
        catchPhrase: 'Synchronised bottom-line interface',
        bs: 'e-enable innovative applications',
      },
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      address: {
        street: 'Rex Trail',
        suite: 'Suite 280',
        city: 'Howemouth',
        zipcode: '58804-1099',
        geo: {
          lat: '24.8918',
          lng: '21.8984',
        },
      },
      phone: '210.067.6132',
      website: 'elvis.io',
      company: {
        name: 'Johns Group',
        catchPhrase: 'Configurable multimedia task-force',
        bs: 'generate enterprise e-tailers',
      },
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      address: {
        street: 'Ellsworth Summit',
        suite: 'Suite 729',
        city: 'Aliyaview',
        zipcode: '45169',
        geo: {
          lat: '-14.3990',
          lng: '-120.7677',
        },
      },
      phone: '586.493.6943 x140',
      website: 'jacynthe.com',
      company: {
        name: 'Abernathy Group',
        catchPhrase: 'Implemented secondary concept',
        bs: 'e-enable extensible e-tailers',
      },
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      address: {
        street: 'Dayna Park',
        suite: 'Suite 449',
        city: 'Bartholomebury',
        zipcode: '76495-3109',
        geo: {
          lat: '24.6463',
          lng: '-168.8889',
        },
      },
      phone: '(775)976-6794 x41206',
      website: 'conrad.com',
      company: {
        name: 'Yost and Sons',
        catchPhrase: 'Switchable contextually-based project',
        bs: 'aggregate real-time technologies',
      },
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      address: {
        street: 'Kattie Turnpike',
        suite: 'Suite 198',
        city: 'Lebsackbury',
        zipcode: '31428-2261',
        geo: {
          lat: '-38.2386',
          lng: '57.2232',
        },
      },
      phone: '024-648-3804',
      website: 'ambrose.net',
      company: {
        name: 'Hoeger LLC',
        catchPhrase: 'Centralized empowering task-force',
        bs: 'target end-to-end models',
      },
    },
  ]

  const onDragEnd = (params) => {
    const srcIndex = params.source.index
    const destIndex = params.destination.index

    list.splice(destIndex, 0, list.splice(srcIndex, 1)[0])

    console.log(srcIndex)
    console.log(destIndex)
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
                      <Form.Label>Short Description</Form.Label>
                      <Form.Control
                        as='textarea'
                        rows={3}
                        placeholder='Write About Your Course'
                        value={shortDesc}
                        onChange={(e) => setShortDesc(e.target.value)}
                      />
                    </Form.Group>
                  </CustomCard>

                  <Card className='mb-3'>
                    <Card.Body>
                      <Card.Title className='border-bottom pb-3 mb-3'>
                        <Row className='align-items-center'>
                          <Col>Lessons</Col>
                          <Col className='text-right'>
                            <Button>
                              ADD LESSON <i className='fa fa-plus'></i>
                            </Button>
                          </Col>
                        </Row>
                      </Card.Title>

                      <DragDropContext
                        onDragEnd={(params) => onDragEnd(params)}
                      >
                        <div className='nestableListWrapper'>
                          <Droppable droppableId='droppable-1'>
                            {(provided, _) => (
                              <ul
                                className='nestableList'
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                              >
                                {list.map((item, index) => (
                                  <Draggable
                                    key={item.id}
                                    draggableId={`draggable-${item.id}`}
                                    index={index}
                                  >
                                    {(provided, snapshot) => (
                                      <li
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        style={{
                                          ...provided.draggableProps.style,
                                          backgroundColor: snapshot.isDragging
                                            ? '#eceaea'
                                            : '',
                                        }}
                                      >
                                        <div
                                          className='nestableHandle'
                                          {...provided.dragHandleProps}
                                        >
                                          <i className='fa fa-bars'></i>
                                        </div>
                                        <div className='nestableContent'>
                                          <div className='nestableContentInner'>
                                            <div className='lessonImg'></div>
                                            <h5>
                                              {item.name} - {index}
                                            </h5>
                                            <h6>{item.email}</h6>
                                          </div>
                                          <div className='nestableContentAction'>
                                            <Button variant='light'>
                                              <i className='fa fa-edit'></i>
                                            </Button>
                                            <Button
                                              variant='danger'
                                              className='ms-2'
                                            >
                                              <i className='fa fa-trash'></i>
                                            </Button>
                                          </div>
                                        </div>
                                      </li>
                                    )}
                                  </Draggable>
                                ))}
                              </ul>
                            )}
                          </Droppable>
                        </div>
                      </DragDropContext>
                    </Card.Body>
                  </Card>
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
