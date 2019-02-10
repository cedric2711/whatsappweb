import { combineReducers } from 'redux'
import users from './users'
import chats from './chats'
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
  users,
  chats,
  loadingBar: loadingBarReducer,
})