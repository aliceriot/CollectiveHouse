import React from "react";
import { render } from "react-dom";
import { connect } from "react-redux";

class GroceryListContainer extends React.Component {
  render () {
    return (
      <GroceryListContents groceryItems={this.props.groceryItems} />
    );
  }
}

function mapStateToProps (state) {
  return {
    groceryItems: state.groceryItems
  }
}

export default connect(mapStateToProps)(GroceryListContainer);
