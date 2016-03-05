// action types
export const SET_GROCERY_ITEMS = 'SET_GROCERY_ITEMS';
export const SET_SYNC_STATE = 'SET_SYNC_STATE';

// action creators
export function setGroceryItems (items) {
  return { type: SET_GROCERY_ITEMS, groceryItems: item };
}

export function setFetchingItems (status) {
  return { type: SET_SYNC_STATE, status: status };
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
