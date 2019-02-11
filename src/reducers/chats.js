import { RECEIVE_CHATS, UPDATE_CHAT } from '../actions/chats'

export default function users (state = {}, action) {
  switch(action.type) {
    case RECEIVE_CHATS :
      return {
        ...state,
        ...action.chats
      }
    case UPDATE_CHAT :
      return {
        ...state,
        [action.chat.id]: action.chat
      }
    default :
      return state
  }
}