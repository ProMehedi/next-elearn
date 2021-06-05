import axios from 'axios'
import * as INSTRUCTOR from '../constants/instructorConstants'

export const payoutInstructor = (doc) => async (dispatch, getState) => {
  try {
    dispatch({ type: INSTRUCTOR.INSTRUCTOR_PAYOUT_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.post('/api/instructor', { doc }, config)

    dispatch({ type: INSTRUCTOR.INSTRUCTOR_PAYOUT_SUCCESS, payload: data })

    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: INSTRUCTOR.INSTRUCTOR_PAYOUT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const registerInstructor =
  (name, email, phone, bkash, address, about) => async (dispatch, getState) => {
    try {
      dispatch({ type: INSTRUCTOR.INSTRUCTOR_REGISTER_REQUEST })

      const {
        userLogin: { userInfo },
      } = getState()

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      }

      const { data } = await axios.post(
        '/api/instructor',
        { name, email, phone, bkash, address, about },
        config
      )

      dispatch({ type: INSTRUCTOR.INSTRUCTOR_REGISTER_SUCCESS, payload: data })
    } catch (error) {
      dispatch({
        type: INSTRUCTOR.INSTRUCTOR_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }
