import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home, User } from '@/containers';

export default (store) => (
  <Switch>
    <Route path="/" exact component={Home} ></Route>
    <Route path="/user" component={User} ></Route>
  </Switch>
);
