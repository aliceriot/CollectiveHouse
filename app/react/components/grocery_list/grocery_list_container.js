import React from "react";
import { render } from "react-dom";
import { connect } from "react-redux";

class GroceryListContainer extends React.Component {
  render () {
    return (
      {this.props.groceryItems.map((foo) => <div>{foo}</div>);}
    );
  }
}

function mapStateToProps (state) {
  return {
    groceryItems: state.groceryItems
  }
}

export default connect(mapStateToProps)(GroceryListContainer);
