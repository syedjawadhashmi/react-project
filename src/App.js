import React, { Component } from 'react';
import './App.css';
import {
  HomePage,
} from './containers'
import './assets/css/bootstrap.min.css'
import './assets/css/now-ui-kit.css'
import './assets/demo/demo.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { history } from './history';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact history={history} component={HomePage} path="/" />
        </Switch>
      </Router>
    );
  }
}

export default (App);
