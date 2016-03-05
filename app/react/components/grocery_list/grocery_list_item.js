import React from "react";
import { render } from "react-dom";

class GroceryListItem extends React.Component {
  render () {
    return (
      <div>
        {this.props.name}
      </div>
    );
  }
}

export default GroceryListItem;
