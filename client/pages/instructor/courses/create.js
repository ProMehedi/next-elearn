import { useEffect, useState } from 'react'
import slugify from 'slugify'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { BeatLoader, ScaleLoader, SquareLoader } from 'react-spinners'
import ReactPlayer from 'react-player/lazy'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  InputGroup,
  Modal,
  Row,
} from 'react-bootstrap'
import Jumbotron from '../../../components/Jumbotron'
import LeftNav from '../../../components/LeftNav'
import TextEditor from '../../../components/TextEditor'
import CustomCard from '../../../components/CustomCard'
import CustomInput from '../../../components/CustomInput'
import { createCourse } from '../../../store/actions/couseActions'
import { COURSE_CREATE_RESET } from '../../../store/constants/courseConstants'
import axios from 'axios'
import CourseForm from '../../../components/forms/CourseForm'

const CreateCoursePage = () => {
  const [course, setCourse] = useState({
    name: '',
    slug: '',
    desc: '',
    shortDesc: '',
    videoUrl: '',
    price: '',
    paid: true,
    category: '',
    duration: '',
    prevImgUrl: '',
    imgUrl: '',
  })
  const [name, setName] = useState('')
  const [slug, setSlug] = useState('')
  const [desc, setDesc] = useState('')
  const [shortDesc, setShortDesc] = useState('')
  const [videoUrl, setVideoUrl] = useState('')
  const [price, setPrice] = useState(9.99)
  const [paid, setPaid] = useState(true)
  const [category, setCategory] = useState('')
  const [duration, setDuration] = useState('00:00:00')
  const [prevImgUrl, setPrevImgUrl] = useState('')
  const [imgUrl, setImgUrl] = useState('')
  const [uploading, setUploading] = useState(false)
  const [lessonModal, setLessonModal] = useState(false)

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

  const uploadImageHandler = async (e) => {
    setUploading(true)
    const file = e.target.files[0]
    const formData = new FormData()

    var reader = new FileReader()

    reader.onload = function (e) {
      setPrevImgUrl(e.target.result)
    }
    reader.readAsDataURL(file)

    formData.append('image', file)
    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
      const { data } = await axios.post('/api/uploads', formData, config)
      setImgUrl(data)
      setUploading(false)
    } catch (uploadError) {
      console.log(uploadError)
      setUploading(false)
    }
  }

  const fileRemoveHandler = () => {
    setPrevImgUrl('')
    setImgUrl('')
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
  }

  const submitHandler = (e) => {
    e.preventDefault()

    // Validations
    if (!name) {
      toast.error('Name is required!')
      return false
    }
    if (name.length < 5) {
      toast.error('Minimum 5 characters required for Name!')
      return false
    }
    if (!videoUrl) {
      toast.error('Video URL is required!')
      return false
    }
    if (!category) {
      toast.error('Category is required!')
      return false
    }
    if (!imgUrl) {
      toast.error('Image is required!')
      return false
    }

    const createdCourse = {
      name,
      slug: slug ? slug : slugify(name.toLowerCase()),
      desc,
      short_desc: shortDesc,
      video: videoUrl,
      price,
      paid,
      category,
      duration,
      image: imgUrl,
    }
    console.log(createdCourse)
    // dispatch(createCourse(createdCourse))
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
                  <img src={`/uploads/${imgUrl}`} alt='' />
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
              <CourseForm
                handleSubmit={submitHandler}
                course={course}
                setCourse={setCourse}
              />
            </Container>
          </div>
        </main>
      </div>
    </>
  )
}

export default CreateCoursePage
