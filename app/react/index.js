import RWR from 'react-webpack-rails';
RWR.run();

// component manifest
import GroceryList from "./components/grocery_list/grocery_list"
RWR.registerComponent('GroceryList', GroceryList);
