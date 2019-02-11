export const SET_ACTIVE_CHAT = 'SET_ACTIVE_CHAT';
export const UPDATE_ACTIVE_CHAT = 'UPDATE_ACTIVE_CHAT';

export function setActiveChat (activeChat) {
  return {
    type: SET_ACTIVE_CHAT,
    activeChat,
  }
}

export function updateActiveChat ({id, text, timestamp, user}) {
  return {
    type: UPDATE_ACTIVE_CHAT,
    id, 
    text, 
    timestamp, 
    user
  }
}