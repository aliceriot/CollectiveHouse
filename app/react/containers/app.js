import React from 'react';
import { Router, Link, Route, browserHistory } from 'react-router';
import CollectiveHouseNav from "../components/shared/collective_house_nav";

class Root extends React.Component {
  render () {
    return(
      <div>
        root
        <br/>
        <Link to="hey">hey</Link>
        <br/>
        <Link to="you">hey</Link>
      </div>
    );
  }
}


class Hey extends React.Component {
  render () {
    return(
      <div>
        hey
      </div>
    );
  }
}

class You extends React.Component {
  render () {
    return(
      <div>
        you
      </div>
    );
  }
}

class App extends React.Component {
  render () {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={CollectiveHouseNav}>
          <Route path="groceries" component={Hey} />
          <Route path="calendar" component={You} />
        </Route>
      </Router>
    );
  }
}

export default App;
