import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home, User, Guestbook } from '@/containers';

export default (store) => (
  <Switch>
    <Route path="/" exact component={Home} ></Route>
    <Route path="/user" component={User} ></Route>
    <Route path="/guestbook" component={Guestbook} ></Route>
  </Switch>
);
