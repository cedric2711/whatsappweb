export const RECEIVE_CHATS = 'RECEIVE_CHATS'

export function receiveChats (chats) {
  return {
    type: RECEIVE_CHATS,
    chats,
  }
}