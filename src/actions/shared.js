import { getInitialData, updateChat } from '../backEnd/api';
import { receiveUsers, updateUserInformation } from './users';
import { receiveChats, updateChatInformation } from './chats';
import { setAuthedUser} from './authedUser';
import { setFriendChat} from './friendChat';
import { setActiveChat, updateActiveChat} from './activeChat';
import { showLoading, hideLoading } from 'react-redux-loading';

const AUTHED_ID = 'simon';

export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData()
      .then(({ users, chats }) => {
        dispatch(receiveUsers(users));
        dispatch(receiveChats(chats));
        dispatch(dispatch(setAuthedUser(AUTHED_ID)));
        dispatch(dispatch(setFriendChat(null)));
        dispatch(dispatch(setActiveChat(null)));
        dispatch(hideLoading());
      })
  }
}

export function updateChatInfo (chatInput) {
  return (dispatch) => {
    dispatch(showLoading());
    return updateChat(chatInput)
    .then((chat) => {
      console.log(chatInput);
      console.log(chat);
      dispatch(updateChatInformation(chat));
      dispatch(updateUserInformation({id:chat.id, authedUser: chatInput.authedUser, friendChat: chatInput.friendChat}))
      dispatch(updateActiveChat({id:chat.id, text: chat.text, timestamp:chat.timestamp, user: chatInput.authedUser}))
      dispatch(hideLoading());
    })
  }
}