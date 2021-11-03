import { combineReducers } from 'redux'

import { userLoginReducer, userRegisterReducer } from './userReducers'

const reducers = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
})

export default reducers
