import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import * as USER from './reducers/userReducers'

const reducer = combineReducers({
  userLogin: USER.userLoginReducer,
  userRegister: USER.userRegisterReducer,
  userDetails: USER.userDetailsReducer,
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
