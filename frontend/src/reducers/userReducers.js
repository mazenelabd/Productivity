import {
  CREATE_LIST_FAIL,
  CREATE_LIST_REQUEST,
  CREATE_LIST_RESET,
  CREATE_LIST_SUCCESS,
  CREATE_TASK_FAIL,
  CREATE_TASK_REQUEST,
  CREATE_TASK_RESET,
  CREATE_TASK_SUCCESS,
  DELETE_LIST_FAIL,
  DELETE_LIST_REQUEST,
  DELETE_LIST_RESET,
  DELETE_LIST_SUCCESS,
  DELETE_TASK_FAIL,
  DELETE_TASK_REQUEST,
  DELETE_TASK_RESET,
  DELETE_TASK_SUCCESS,
  UPDATE_LIST_FAIL,
  UPDATE_LIST_REQUEST,
  UPDATE_LIST_RESET,
  UPDATE_LIST_SUCCESS,
  UPDATE_TASK_FAIL,
  UPDATE_TASK_REQUEST,
  UPDATE_TASK_RESET,
  UPDATE_TASK_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from '../constants/userConstants'

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true }
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload }
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload }
    case USER_LOGOUT:
      return {}
    default:
      return state
  }
}

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true }
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload }
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload }
    case USER_LOGOUT:
      return {}
    default:
      return state
  }
}

export const createListReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_LIST_REQUEST:
      return { loading: true }
    case CREATE_LIST_SUCCESS:
      return { loading: false, success: true, userInfo: action.payload }
    case CREATE_LIST_FAIL:
      return { loading: false, error: action.payload }
    case CREATE_LIST_RESET:
      return {}
    default:
      return state
  }
}

export const createTaskReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_TASK_REQUEST:
      return { loading: true }
    case CREATE_TASK_SUCCESS:
      return { loading: false, success: true, userInfo: action.payload }
    case CREATE_TASK_FAIL:
      return { loading: false, error: action.payload }
    case CREATE_TASK_RESET:
      return {}
    default:
      return state
  }
}

export const updateListReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_LIST_REQUEST:
      return { loading: true }
    case UPDATE_LIST_SUCCESS:
      return { loading: false, success: true, userInfo: action.payload }
    case UPDATE_LIST_FAIL:
      return { loading: false, error: action.payload }
    case UPDATE_LIST_RESET:
      return {}
    default:
      return state
  }
}

export const updateTaskReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_TASK_REQUEST:
      return { loading: true }
    case UPDATE_TASK_SUCCESS:
      return { loading: false, success: true, userInfo: action.payload }
    case UPDATE_TASK_FAIL:
      return { loading: false, error: action.payload }
    case UPDATE_TASK_RESET:
      return {}
    default:
      return state
  }
}

export const deleteListReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_LIST_REQUEST:
      return { loading: true }
    case DELETE_LIST_SUCCESS:
      return { loading: false, success: true, userInfo: action.payload }
    case DELETE_LIST_FAIL:
      return { loading: false, error: action.payload }
    case DELETE_LIST_RESET:
      return {}
    default:
      return state
  }
}

export const deleteTaskReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_TASK_REQUEST:
      return { loading: true }
    case DELETE_TASK_SUCCESS:
      return { loading: false, success: true, userInfo: action.payload }
    case DELETE_TASK_FAIL:
      return { loading: false, error: action.payload }
    case DELETE_TASK_RESET:
      return {}
    default:
      return state
  }
}
