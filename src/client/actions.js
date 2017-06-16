// Action Types
export const EXAMPLE_ACTION = 'EXAMPLE_ACTION'
export const UPDATE_SEARCH_STATUS = 'UPDATE_SEARCH_STATUS'
export const UPDATE_SEARCH_ARRAY = 'UPDATE_SEARCH_ARRAY'
export const CLEAR_SEARCH_RESULTS = 'CLEAR_SEARCH_RESULTS'

// thunk status constants
export const NONE = 'NONE'
export const REQUESTED = 'REQUESTED'
export const FAILURE = 'FAILURE'
export const SUCCESS = 'SUCCESS'


// Action Creators
export function exampleAction(value) {
  return {
    type: EXAMPLE_ACTION,
    value: value
  };
}

function updateSearchStatus(value) {
  return {
    type: UPDATE_SEARCH_STATUS,
    value: value
  }
}

function updateSearchArray(searchResults) {
  return {
    type: UPDATE_SEARCH_ARRAY,
    searchResults: searchResults
  }
}

function clearSearchResults(value) {
  return {
    type: CLEAR_SEARCH_RESULTS
  }
}

export function newSearch(search_text) {
  return (dispatch) => {
    dispatch(updateSearchStatus(REQUESTED));
    return fetch('https://en.wikipedia.org/w/api.php?action=opensearch&search=' + search_text + '&limit=20&namespace=0&origin=*&format=json')
      .then(response => response.json())
      .then(json => {
            dispatch(updateSearchArray(json[1]));
            dispatch(updateSearchStatus(SUCCESS))
      })
      .catch(err => dispatch(UPDATE_SEARCH_STATUS(FAILURE)))
  }
}