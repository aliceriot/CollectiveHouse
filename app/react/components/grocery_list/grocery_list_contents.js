import React from "react";
import { render } from "react-dom";
import GroceryListItem from "./grocery_list_item";

class GroceryListContents extends React.Component {
  render() {
    return (
      <div>
        <h1>
          {this.props.syncState}
        </h1>
        {this.renderGroceryItems()}
      </div>
    );
  }

  renderGroceryItems () {
    let groceryItems = [];
    if (this.props.groceryItems) {
      this.props.groceryItems.forEach( (item, index) => {
        groceryItems.push(
          <GroceryListItem
            name={item.name}
            quantity={item.quantity}
            key={index} />
        );
      });
    };
    return groceryItems;
  }
}

GroceryListContents.propTypes = {
  groceryItems:     React.PropTypes.array,
  syncState:        React.PropTypes.string
}

export default GroceryListContents;
