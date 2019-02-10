import { combineReducers } from 'redux'
import users from './users'
import chats from './chats'
import authedUser from './authedUser'
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
  authedUser,
  users,
  chats,
  loadingBar: loadingBarReducer,
})