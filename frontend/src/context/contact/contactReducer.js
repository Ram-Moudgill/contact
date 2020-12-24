import {
  REMOVE_ALERT,
  SET_ALERT,
  CLEAR_FILTER,
  FILTER_CONTACT,
  UPDATE_CONTACT,
  CLEAR_CONTACT,
  SET_CONTACT,
  ADD_CONTACT,
  DELETE_CONTACT,
} from '../types'

export default (state, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      }
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      }
    case SET_CONTACT:
      return {
        ...state,
        current: action.payload,
      }
    case CLEAR_CONTACT:
      return {
        ...state,
        current: null,
      }
    case FILTER_CONTACT:
      return {
        ...state,
        filtered: state.contacts.filter(
          (contact) =>
            contact.name.includes(action.payload) ||
            contact.type.includes(action.payload) ||
            contact.email.includes(action.payload) ||
            contact.phone.includes(action.payload)
        ),
      }
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      }
    default:
      return state
  }
}
