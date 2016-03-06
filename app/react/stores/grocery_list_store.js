import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import groceryApp from "../reducers/grocery_list_reducers";

let groceryListStore = createStore(
  groceryApp,
  applyMiddleware(
    thunkMiddleware
  )
);

export default groceryListStore;
