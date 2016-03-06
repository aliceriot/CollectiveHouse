import * as actions from "../actions/grocery_list_actions";

function groceryApp (state = {}, action) {
  switch (action.type) {
    case actions.SET_GROCERY_ITEMS:
      return Object.assign({}, state, {
        groceryItems: action.groceryItems
      });
    case actions.SET_SYNC_STATE:
      return Object.assign({}, state, {
        syncState: action.syncState
      });
    default:
      return state;
  }
}

export default groceryApp;
