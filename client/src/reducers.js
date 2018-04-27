import { combineReducers } from 'redux';

let bearsReducer = function(state = [], action) {
  if (action) {
    if (action.type === 'FETCH_BEAR') {
      return action.payload;
    }
  }

  return state;
}

let reducer = combineReducers({
  bears: bearsReducer
});

export default reducer;