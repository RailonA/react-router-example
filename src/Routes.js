import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/App';
import Profile from './components/Profile';
import Home from './components/Home';
import Nav from './components/Nav';

const Routes = () => (
  <BrowserRouter>
    <Nav />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/app" component={App} />
      <Route exact path="/profile" component={Profile} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
