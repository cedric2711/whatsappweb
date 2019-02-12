export const SET_FILTER = 'SET_FILTER'

export function setFilter(text) {
  return {
    type: SET_FILTER,
    text,
  }
}