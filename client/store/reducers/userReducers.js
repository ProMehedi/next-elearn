import * as USER from '../constants/userConstants'

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER.USER_LOGIN_REQUEST:
      return { loading: true }

    case USER.USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload }

    case USER.USER_LOGIN_FAIL:
      return { loading: false, error: action.payload }

    case USER.USER_LOGOUT:
      return {}

    default:
      return state
  }
}

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER.USER_REGISTER_REQUEST:
      return { loading: true }

    case USER.USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload }

    case USER.USER_REGISTER_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

export const userVefiryReducer = (state = {}, action) => {
  switch (action.type) {
    case USER.USER_VERIFY_REQUEST:
      return { loading: true }

    case USER.USER_VERIFY_SUCCESS:
      return { loading: false, success: true }

    case USER.USER_VERIFY_FAIL:
      return { loading: false, error: action.payload }

    case USER.USER_VERIFY_RESET:
      return {}

    default:
      return state
  }
}

export const userDetailsReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER.USER_DETAILS_REQUEST:
      return { ...state, loading: true }

    case USER.USER_DETAILS_SUCCESS:
      return { loading: false, user: action.payload }

    case USER.USER_DETAILS_FAIL:
      return { loading: false, error: action.payload }

    case USER.USER_DETAILS_RESET:
      return { user: {} }

    default:
      return state
  }
}

export const passForgotReducer = (state = {}, action) => {
  switch (action.type) {
    case USER.USER_PASS_FORGOT_REQUEST:
      return { loading: true }

    case USER.USER_PASS_FORGOT_SUCCESS:
      return { loading: false, success: true }

    case USER.USER_PASS_FORGOT_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

export const passResetReducer = (state = {}, action) => {
  switch (action.type) {
    case USER.USER_PASS_RESET_REQUEST:
      return { loading: true }

    case USER.USER_PASS_RESET_SUCCESS:
      return { loading: false, success: true }

    case USER.USER_PASS_RESET_FAIL:
      return { loading: false, error: action.payload }

    case USER.USER_PASS_RESET_RESET:
      return {}

    default:
      return state
  }
}
