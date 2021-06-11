import * as COURSE from '../constants/courseConstants'

export const courseCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case COURSE.COURSE_CREATE_REQUEST:
      return { loading: true }

    case COURSE.COURSE_CREATE_SUCCESS:
      return { loading: false, success: true }

    case COURSE.COURSE_CREATE_FAIL:
      return { loading: false, error: action.payload }

    case COURSE.COURSE_CREATE_RESET:
      return {}

    default:
      return state
  }
}

export const courseDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case COURSE.COURSE_DETAILS_REQUEST:
      return { loading: true }

    case COURSE.COURSE_DETAILS_SUCCESS:
      return { loading: false, course: action.payload }

    case COURSE.COURSE_DETAILS_FAIL:
      return { loading: false, error: action.payload }

    case COURSE.COURSE_DETAILS_RESET:
      return {}

    default:
      return state
  }
}

export const courseUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case COURSE.COURSE_UPDATE_REQUEST:
      return { loading: true }

    case COURSE.COURSE_UPDATE_SUCCESS:
      return { loading: false, success: true }

    case COURSE.COURSE_UPDATE_FAIL:
      return { loading: false, error: action.payload }

    case COURSE.COURSE_UPDATE_RESET:
      return {}

    default:
      return state
  }
}
