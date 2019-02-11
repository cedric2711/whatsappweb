import { SET_ACTIVE_CHAT } from '../actions/activeChat'

export default function authedUser (state = null, action) {
  switch (action.type) {
    case SET_ACTIVE_CHAT :
      return action.activeChat
    default :
      return state
  }
}