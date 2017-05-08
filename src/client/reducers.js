import * as actions from './actions.js'


function placeholder(state='none', action) {
  switch (action.type) {
    case actions.EXAMPLE_ACTION:
      return action.value;
    default:
      return state;
  }
}

export default function rootReducer(state={}, action) {
  return {
    placeholder: placeholder(state.placeholder, action)
  }
}

