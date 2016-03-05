import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import groceryListStore from "../../stores/grocery_list_store";
import GroceryListContainer from "./grocery_list_container";

class GroceryList extends React.Component {
  render () {
    console.log(groceryListStore.getState())
    return (
      <Provider store = {groceryListStore}>
        <GroceryListContainer />
      </Provider>
    );
  }
}

export default GroceryList;
