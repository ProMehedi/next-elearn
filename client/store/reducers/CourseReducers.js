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
