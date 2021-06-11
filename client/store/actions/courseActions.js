import axios from 'axios'
import * as COURSE from '../constants/courseConstants'

export const createCourse = (course) => async (dispatch, getState) => {
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

export const detailsCourse = (slug) => async (dispatch, getState) => {
  try {
    dispatch({ type: COURSE.COURSE_DETAILS_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(`/api/courses/${slug}`, config)

    dispatch({ type: COURSE.COURSE_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: COURSE.COURSE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

// Update Course Details
export const updateCourse = (course) => async (dispatch, getState) => {
  try {
    dispatch({ type: COURSE.COURSE_UPDATE_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    await axios.put(`/api/courses/${course._id}`, course, config)
    dispatch({ type: COURSE.COURSE_UPDATE_SUCCESS })
  } catch (error) {
    dispatch({
      type: COURSE.COURSE_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
