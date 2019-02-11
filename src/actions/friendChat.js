export const SET_FRIEND_CHAT = 'SET_FRIEND_CHAT'

export function setFriendChat (id) {
  return {
    type: SET_FRIEND_CHAT,
    id,
  }
}