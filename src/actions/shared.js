import { getInitialData } from '../backEnd/api';
import { receiveUsers } from './users';
import { receiveChats } from './chats';
import { showLoading, hideLoading } from 'react-redux-loading';

const AUTHED_ID = null;

export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ users, chats }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveChats(chats))
        dispatch(hideLoading())
      })
  }
}