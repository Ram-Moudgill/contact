import react, { useReducer } from 'react'
import AuthContext from './contactcontext'
import { v4 as uuidv4 } from 'uuid'
import authReducer from './authReducer'
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from '../types'
