import React from 'react';
import {
  Router,
  Link,
  Route,
  IndexRoute,
  browserHistory
} from 'react-router';
import CollectiveHouseNav from "../components/shared/collective_house_nav";
import WelcomePage from "../components/shared/welcome_page";
import CalendarPage from "../components/calendar/calendar_page";
import GroceryListContainer from "../components/grocery_list/grocery_list_container";

class App extends React.Component {
  render () {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={CollectiveHouseNav}>
          <IndexRoute component={WelcomePage} />
          <Route path="groceries" component={GroceryListContainer} />
          <Route path="calendar" component={CalendarPage} />
        </Route>
      </Router>
    );
  }
}

export default App;
