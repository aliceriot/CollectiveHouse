import React from 'react';
import { Router, Link, Route, browserHistory } from 'react-router';

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
        <br/>
        <Link to="hey">hey</Link>
        <br/>
        <Link to="you">you</Link>
      </div>
    );
  }
}

class You extends React.Component {
  render () {
    return(
      <div>
        you
        <br/>
        <Link to="hey">hey</Link>
        <br/>
        <Link to="you">hey</Link>
      </div>
    );
  }
}

class App extends React.Component {
  render () {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Root}>
          <Route path="hey" component={Hey} />
          <Route path="you" component={You} />
        </Route>
      </Router>
    );
  }
}

export default App;
