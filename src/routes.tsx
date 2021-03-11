import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Products from './pages/Products';
import Users from './pages/Users';


function Routes() {

  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/currency" exact component={Users} />
      <Route path="/finances" exact component={Products} />
    </Switch>
  )
}

export default Routes;