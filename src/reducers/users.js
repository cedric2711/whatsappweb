import { RECEIVE_USERS, UPDATE_USER } from '../actions/users'

export default function users (state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }
    case UPDATE_USER :
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          friendList: {
            ...state[action.authedUser].friendList,
            [action.friendChat]: state[action.authedUser].friendList[action.friendChat].concat([action.id])
          }
        }
      }
    default :
      return state
  }
}