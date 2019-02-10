import { RECEIVE_CHATS } from '../actions/chats'

export default function users (state = {}, action) {
  switch(action.type) {
    case RECEIVE_CHATS :
      return {
        ...state,
        ...action.chats
      }
    default :
      return state
  }
}