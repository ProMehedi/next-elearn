import * as INSTRUCTOR from '../constants/instructorConstants'

export const instructorPayoutReducer = (state = {}, action) => {
  switch (action.type) {
    case INSTRUCTOR.INSTRUCTOR_PAYOUT_REQUEST:
      return { loading: true }

    case INSTRUCTOR.INSTRUCTOR_PAYOUT_SUCCESS:
      return { loading: false, payout: action.payload }

    case INSTRUCTOR.INSTRUCTOR_PAYOUT_FAIL:
      return { loading: false, error: action.payload }

    case INSTRUCTOR.INSTRUCTOR_PAYOUT_RESET:
      return {}

    default:
      return state
  }
}
