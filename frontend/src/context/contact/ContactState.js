import react, { useReducer } from 'react'
import contactContext from './contactcontext'
import { v4 as uuidv4 } from 'uuid'
import contactReducer from './contactReducer'
import {
  REMOVE_ALERT,
  SET_ALERT,
  CLEAR_FILTER,
  FILTER_CONTACT,
  UPDATE_CONTACT,
  CLEAR_CONTACT,
  DELETE_CONTACT,
  ADD_CONTACT,
  SET_CONTACT,
} from '../types'

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'ram',
        email: 'ramgill@gmail.com',
        phone: '1111111111',
        type: 'personal',
      },
      {
        id: 2,
        name: 'ramgill',
        email: 'ramgill@gmail.com',
        phone: '1111111111',
        type: 'professional',
      },
      {
        id: 3,
        name: 'ram',
        email: 'ramgill@gmail.com',
        phone: '1111111111',
        type: 'personal',
      },
    ],
    current: null,
    filtered: null,
  }
  const [state, dispatch] = useReducer(contactReducer, initialState)
  //addcontact
  const addContact = (contact) => {
    contact.id = uuidv4()
    dispatch({ type: ADD_CONTACT, payload: contact })
  }
  // deletecontact
  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id })
  }
  //set contact
  const setCurrent = (contact) => {
    dispatch({ type: SET_CONTACT, payload: contact })
  }
  //Clear contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CONTACT })
  }
  //updatecontact
  //filtercontact
  const filterContact = (value) => {
    dispatch({ type: FILTER_CONTACT, payload: value })
  }
  //clearfiltercontact
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER })
  }
  return (
    <contactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        filterContact,
        clearFilter,
      }}
    >
      {props.children}
    </contactContext.Provider>
  )
}

export default ContactState
