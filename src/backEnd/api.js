import {
  _getUsers,
  _getChats,
  _updateChat
} from './_DATA.js'

export function getInitialData () {
  return Promise.all([
    _getUsers(),
    _getChats(),
  ]).then(([users, chats]) => ({
    users,
    chats,
  }))
}

export function updateChat(chat) {
  return _updateChat(chat);
}