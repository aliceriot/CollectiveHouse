import React from "react";
import { render } from "react-dom";

class GroceryListItem extends React.Component {
  render () {
    return (
      <div>
        {this.props.name}
        {this.props.quantity}
      </div>
    );
  }
}

GroceryListItem.propTypes = {
  name:       React.PropTypes.string,
  quantity:   React.PropTypes.integer
}

export default GroceryListItem;
