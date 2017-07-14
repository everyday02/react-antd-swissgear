import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './components/Layout/index';
// import Home from '@/views/Home';

export const childRoutes = [
  {
    path: '/home',
    component: null,
    exactly: true
  }
];

const routes = (
  <Switch>
    <Route path="/" component={Layout} />
  </Switch>
);

export default routes;
