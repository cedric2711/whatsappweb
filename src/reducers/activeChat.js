import { SET_ACTIVE_CHAT, UPDATE_ACTIVE_CHAT } from '../actions/activeChat'

export default function authedUser (state = null, action) {
  switch (action.type) {
    case SET_ACTIVE_CHAT :
      return action.activeChat
    case UPDATE_ACTIVE_CHAT :
      let {id, text, timestamp, user} = action;
      return state.concat({id,text,timestamp,user})
    default :
      return state
  }
}