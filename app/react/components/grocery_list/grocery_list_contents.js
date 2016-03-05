import React from "react";
import { render } from "react-dom";
import GroceryListItem from "./grocery_list_item";

class GroceryListContents extends React.Component {
  render() {
    return (
      <div>
        {this.renderGroceryItems()}
      </div>
    );
  }

  renderGroceryItems () {
    let groceryItems = [];
    this.props.groceryItems.map( (foo) => {
      groceryItems.push(
        <div key={foo}>
          {foo}
        </div>
      );
    });
    return groceryItems;
  }
}

export default GroceryListContents;
