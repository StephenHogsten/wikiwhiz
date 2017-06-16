import * as actions from './actions.js'


function placeholder(state='none', action) {
  switch (action.type) {
    case actions.EXAMPLE_ACTION:
      return action.value;
    default:
      return state;
  }
}

function searchStatus(state=actions.NONE, action) {
  switch (action.type) {
    case actions.UPDATE_SEARCH_STATUS:
      return action.value
    case actions.CLEAR_SEARCH_RESULTS:
      return actions.NONE
    default:
      return state
  }
}

function searchArray(state=[], action) {
  switch (action.type) {
    case actions.UPDATE_SEARCH_ARRAY:
      return action.searchResults
    case actions.CLEAR_SEARCH_RESULTS:
      return []
    default:
      return state
  }
}

export default function rootReducer(state={}, action) {
  return {
    placeholder: placeholder(state.placeholder, action),
    searchStatus: searchStatus(state.searchStatus, action),
    searchArray: searchArray(state.searchArray, action)
  }
}

