export const RECEIVE_CHATS = 'RECEIVE_CHATS';
export const UPDATE_CHAT = 'UPDATE_CHAT';

export function receiveChats(chats) {
  return {
    type: RECEIVE_CHATS,
    chats,
  }
}

export function updateChatInformation(chat) {
  return {
    type: UPDATE_CHAT,
    chat
  }
}