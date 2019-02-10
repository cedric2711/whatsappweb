import {
  _getUsers,
  _getChats
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