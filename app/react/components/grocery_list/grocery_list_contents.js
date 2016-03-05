import React from "react";
import { render } from "react-dom";

class GroceryListContents extends React.Component {
  render() {
    return (
      <div>
        {this.props.groceryItems.map((foo) => <div>foo</div>)}
      </div>
    );
  }
}

export default GroceryListContents;
