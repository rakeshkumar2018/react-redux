/* eslint-disable import/no-named-as-default */
import { NavLink, Route, Switch } from "react-router-dom";

import NotFoundPage from "./components/NotFoundPage";
import TestContainer from "./containers/TestContainer";
import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";
import UserApi from './components/UserApi'
import UserContainer from "./containers/UserContainer";
import CityWeather from './components/CityWeather';
import WeatherContainer from './containers/WeatherContainer';
import Stud from './components/Stud';
import StudContainer from './containers/StudContainer';
import News from './components/News';
import NewsContainer from './containers/NewsContainer';
import Login from './components/Login'

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    const activeStyle = { color: 'blue' };
    return (
      <div>
        <Switch>
          <Route exact path="/" component={TestContainer} />
          <Route exact path="/user" component={UserContainer} />
          <Route exact path="/weather" component={WeatherContainer} />
          <Route exact path="/stud" component={StudContainer} />
          <Route exact path="/news" component={NewsContainer} />
          <Route exact path="/login" component={Login} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
