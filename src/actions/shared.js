import { getInitialData } from '../backEnd/api';
import { receiveUsers } from './users';
import { receiveChats } from './chats';
import { setAuthedUser} from './authedUser';
import { setFriendChat} from './friendChat';
import { setActiveChat} from './activeChat';
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