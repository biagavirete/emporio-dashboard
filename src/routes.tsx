import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Products from './pages/Products';
import { MainContainer } from './styles';

function Routes() {

  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <MainContainer>
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/users" exact component={Users} />
        <Route path="/products" exact component={Products} />
      </MainContainer>
    </Switch>
  )
};

export default Routes;