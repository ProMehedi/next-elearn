import { createContext, useReducer } from 'react'

// Initial State
const initialState = {
  user: null,
}

// Create Context
const Context = createContext()

// Root Reducer
const rootReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload }

    case 'LOGOUT':
      return { ...state, user: null }

    default:
      return state
  }
}

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState)

  return (
    <Context.Provider value={(state, dispatch)}>{children}</Context.Provider>
  )
}

export { Context, Provider }
