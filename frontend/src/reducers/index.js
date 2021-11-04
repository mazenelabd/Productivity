import { combineReducers } from 'redux'

import {
  createListReducer,
  createTaskReducer,
  deleteListReducer,
  deleteTaskReducer,
  updateListReducer,
  updateTaskReducer,
  userLoginReducer,
  userRegisterReducer,
} from './userReducers'

const reducers = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  listCreate: createListReducer,
  listUpdate: updateListReducer,
  listDelete: deleteListReducer,
  taskCreate: createTaskReducer,
  taskUpdate: updateTaskReducer,
  taskDelete: deleteTaskReducer,
})

export default reducers
