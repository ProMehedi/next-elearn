import axios from 'axios'
import * as COURSE from '../constants/courseConstants'

export const createCourse = (course) => async (dispatch) => {
  try {
    dispatch({ type: COURSE.COURSE_CREATE_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    await axios.post('/api/courses', course, config)

    dispatch({ type: COURSE.COURSE_CREATE_SUCCESS })
  } catch (error) {
    dispatch({
      type: COURSE.COURSE_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
