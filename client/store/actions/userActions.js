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
  // clearCookies('token')
  document.cookie = 'token' + '=; Max-Age=0'
  dispatch({ type: USER.USER_LOGOUT })
}
