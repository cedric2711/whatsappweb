import { SET_FRIEND_CHAT } from '../actions/friendChat'

export default function authedUser (state = null, action) {
  switch (action.type) {
    case SET_FRIEND_CHAT :
      return action.id
    default :
      return state
  }
}