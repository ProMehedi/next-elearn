import axios from 'axios'
import * as USER from '../constants/userConstants'

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER.USER_LOGIN_REQUEST })

    const config = {
      headers: { 'Content-Type': 'application/json' },
    }

    const { data } = await axios.post(
      '/api/users/login',
      { email, password },
      config
    )

    dispatch({ type: USER.USER_LOGIN_SUCCESS, payload: data })

    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER.USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const logout = () => (dispatch) => {
  localStorage.removeItem('userInfo')
  document.cookie = 'token' + '=; Max-Age=0'
  dispatch({ type: USER.USER_LOGOUT })
  dispatch({ type: USER.USER_DETAILS_RESET })
}

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER.USER_REGISTER_REQUEST })

    const config = {
      headers: { 'Content-Type': 'application/json' },
    }

    const { data } = await axios.post(
      '/api/users',
      { name, email, password },
      config
    )

    dispatch({ type: USER.USER_REGISTER_SUCCESS, payload: data })
    dispatch({ type: USER.USER_LOGIN_SUCCESS, payload: data })

    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER.USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const verifyUser = (email, code) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER.USER_VERIFY_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    await axios.post(`/api/users/verify`, { email, code }, config)

    dispatch({ type: USER.USER_VERIFY_SUCCESS })
  } catch (error) {
    dispatch({
      type: USER.USER_VERIFY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const getUserDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER.USER_DETAILS_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(`/api/users/${id}`, config)

    dispatch({ type: USER.USER_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: USER.USER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const forgotPassword = (email) => async (dispatch) => {
  try {
    dispatch({ type: USER.USER_PASS_FORGOT_REQUEST })

    const config = {
      headers: { 'Content-Type': 'application/json' },
    }

    await axios.post(`/api/users/forgot-password`, { email }, config)

    dispatch({ type: USER.USER_PASS_FORGOT_SUCCESS })
  } catch (error) {
    dispatch({
      type: USER.USER_PASS_FORGOT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const resetPassword = (email, code, password) => async (dispatch) => {
  try {
    dispatch({ type: USER.USER_PASS_RESET_REQUEST })

    const config = {
      headers: { 'Content-Type': 'application/json' },
    }

    await axios.post(
      `/api/users/reset-password`,
      { email, code, password },
      config
    )

    dispatch({ type: USER.USER_PASS_RESET_SUCCESS })
  } catch (error) {
    dispatch({
      type: USER.USER_PASS_RESET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
