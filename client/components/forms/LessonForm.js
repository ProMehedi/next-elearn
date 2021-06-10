import React from 'react'
import { Button, Form, Col, Row } from 'react-bootstrap'
import ReactPlayer from 'react-player'
import slugify from 'slugify'
import CustomCard from '../CustomCard'
import CustomInput from '../CustomInput'

const LessonForm = ({ lesson, setLesson, submitHandler }) => {
  return (
    <>
      <CustomCard classes='mb-3'>
        <CustomInput
          size='sm'
          label='Lesson Title'
          placeholder='Enter Title'
          value={lesson.title}
          onChange={(e) => {
            setLesson({
              ...lesson,
              title: e.target.value,
              slug: slugify(e.target.value.toLowerCase()),
            })
          }}
        />
        <CustomInput
          label='Duration (00:00:00)'
          placeholder='Total Course Duration'
          value={lesson.duration}
          onChange={(e) => setLesson({ ...lesson, duration: e.target.value })}
        />
        <Row className='align-items-center mb-3'>
          <Col>Free Preview</Col>
          <Col>
            <div className='onoffswitch ms-auto'>
              <input
                type='checkbox'
                name='onoffswitch'
                className='onoffswitch-checkbox'
                id='freePreview'
                tabIndex='1'
                checked={lesson.freePreview}
                onChange={(e) =>
                  setLesson({ ...lesson, freePreview: e.target.checked })
                }
              />
              <label className='onoffswitch-label' htmlFor='freePreview'>
                <span className='onoffswitch-inner'></span>
                <span className='onoffswitch-switch'></span>
              </label>
            </div>
          </Col>
        </Row>
        <Form.Group className='mb-3'>
          <CustomInput
            type='url'
            label='Video URL'
            required
            placeholder='Enter Video URL'
            value={lesson.videoUrl}
            onChange={(e) => setLesson({ ...lesson, videoUrl: e.target.value })}
          />
          {lesson.videoUrl && (
            <ReactPlayer
              controls
              width='100%'
              height='100%'
              url={lesson.videoUrl}
            />
          )}
        </Form.Group>

        <Button type='button' onClick={submitHandler}>
          SUBMIT LESSON
        </Button>
      </CustomCard>
    </>
  )
}

export default LessonForm
