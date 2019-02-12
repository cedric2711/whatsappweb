import { getInitialData, updateChat } from '../backEnd/api';
import { receiveUsers, updateUserInformation } from './users';
import { receiveChats, updateChatInformation } from './chats';
import { setAuthedUser } from './authedUser';
import { setFriendChat } from './friendChat';
import { setActiveChat, updateActiveChat } from './activeChat';
import { setFilter } from './filterUsers';
import { showLoading, hideLoading } from 'react-redux-loading';

const AUTHED_ID = null;

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData()
      .then(({ users, chats }) => {
        dispatch(receiveUsers(users));
        dispatch(receiveChats(chats));
        dispatch(dispatch(setAuthedUser(AUTHED_ID)));
        dispatch(dispatch(setFriendChat(null)));
        dispatch(dispatch(setActiveChat(null)));
        dispatch(dispatch(setFilter(null)));
        dispatch(hideLoading());
      })
  }
}

export function updateChatInfo(chatInput) {
  return (dispatch) => {
    dispatch(showLoading());
    return updateChat(chatInput)
      .then((chat) => {
        console.log(chatInput);
        console.log(chat);
        dispatch(updateChatInformation(chat));
        dispatch(updateUserInformation({ id: chat.id, authedUser: chatInput.authedUser, friendChat: chatInput.friendChat }))
        dispatch(updateActiveChat({ id: chat.id, text: chat.text, timestamp: chat.timestamp, user: chatInput.authedUser }))
        dispatch(hideLoading());
      })
  }
}

export function logout() {
  return (dispatch) => {
    dispatch(showLoading());
    dispatch(dispatch(setAuthedUser(null)));
    dispatch(dispatch(setFriendChat(null)));
    dispatch(dispatch(setActiveChat(null)));
    dispatch(dispatch(setFilter(null)));
    dispatch(hideLoading());
  }
}