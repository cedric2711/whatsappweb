import { SET_FILTER } from '../actions/filterUsers'

export default function authedUser (state = null, action) {
  switch (action.type) {
    case SET_FILTER :
      return action.text
    default :
      return state
  }
}