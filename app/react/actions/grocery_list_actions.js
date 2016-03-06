// action types
export const SET_GROCERY_ITEMS = 'SET_GROCERY_ITEMS';
export const SET_SYNC_STATE = 'SET_SYNC_STATE';

// action creators
export function setGroceryItems (items) {
  return { type: SET_GROCERY_ITEMS, groceryItems: items };
}

export function setSyncState (status) {
  return { type: SET_SYNC_STATE, syncState: status };
}

export function fetchGroceryItems () {
  return function (dispatch) {
    dispatch(setSyncState("syncing"));
    return fetch("/grocery_items/unpurchased")
      .then(response => response.json())
      .then(json => {
        dispatch(setGroceryItems(json));
        dispatch(setSyncState("synced"));
      });
  }
}
