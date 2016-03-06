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
    if (this.props.groceryItems) {
      this.props.groceryItems.forEach( (item, index) => {
        groceryItems.push(
          <GroceryListItem item={item} key={index} />
        );
      });
    };
    return groceryItems;
  }
}

export default GroceryListContents;
