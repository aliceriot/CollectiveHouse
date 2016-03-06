import React from "react";
import { render } from "react-dom";

class GroceryListItem extends React.Component {
  render () {
    return (
      <div>
        {this.props.item.name}
      </div>
    );
  }
}

GroceryListItem.propTypes = {
  item:   React.PropTypes.object
}

export default GroceryListItem;
