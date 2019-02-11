export const SET_ACTIVE_CHAT = 'SET_ACTIVE_CHAT'

export function setActiveChat (activeChat) {
  return {
    type: SET_ACTIVE_CHAT,
    activeChat,
  }
}