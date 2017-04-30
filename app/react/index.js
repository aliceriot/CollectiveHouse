import RWR from 'react-webpack-rails';
RWR.run();

// component manifest
// App is our container component
import App from "./containers/app";
RWR.registerComponent('App', App);
