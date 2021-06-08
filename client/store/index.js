import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import * as USER from './reducers/userReducers'
import * as INSTRUCTOR from './reducers/instructorReducers'
import * as COURSE from './reducers/courseReducers'

const reducer = combineReducers({
  userLogin: USER.userLoginReducer,
  userRegister: USER.userRegisterReducer,
  userVefiry: USER.userVefiryReducer,
  userDetails: USER.userDetailsReducer,
  passForgot: USER.passForgotReducer,
  passReset: USER.passResetReducer,
  instructorPayout: INSTRUCTOR.instructorPayoutReducer,
  instructorRegister: INSTRUCTOR.instructorRegisterReducer,
  courseCreate: COURSE.courseCreateReducer,
})

const ISSERVER = typeof window === 'undefined'

let userInfoFromLocal

if (!ISSERVER) {
  userInfoFromLocal = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null
}

const inialState = {
  userLogin: { userInfo: userInfoFromLocal },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  inialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
