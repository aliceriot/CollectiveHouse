import React from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import GroceryListContents from "./grocery_list_contents";
import { setSyncState, setGroceryItems } from "../../actions/grocery_list_actions";

class GroceryListContainer extends React.Component {
  constructor (props) {
    super(props);
  }

  componentWillMount () {
    this.refreshItems();
  }

  refreshItems () {
    const { dispatch } = this.props;
    dispatch(setSyncState("syncing"));
    $.getJSON("/grocery_items/unpurchased",
      function (json) {
        dispatch(setGroceryItems(json));
        dispatch(setSyncState("synced"));
      })
  }

  handleRefreshClick (e) {
    e.preventDefault();
    this.refreshItems();
  }

  render () {
    const { groceryItems, syncState } = this.props;
    return (
      <div>
        <GroceryListContents {...this.props} />
        <button onClick={this.handleRefreshClick.bind(this)} />
      </div>
    );
  }
}

GroceryListContainer.propTypes = {
  groceryItems:     React.PropTypes.array,
  syncState:        React.PropTypes.string
};

function mapStateToProps (state) {
  return {
    groceryItems: state.groceryItems,
    syncState:    state.syncState
  }
}

export default connect(mapStateToProps)(GroceryListContainer);
