import { combineReducers } from 'redux';
import users from './users';
import chats from './chats';
import authedUser from './authedUser';
import friendChat from './friendChat';
import activeChat from './activeChat';
import { loadingBarReducer } from 'react-redux-loading';

export default combineReducers({
  authedUser,
  users,
  chats,
  activeChat,
  friendChat,
  loadingBar: loadingBarReducer,
})