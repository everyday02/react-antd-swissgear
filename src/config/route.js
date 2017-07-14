import React from 'react';
import { Route } from 'react-router';
import { HashRouter as Router } from 'react-router-dom';
import createHistory from 'history/createHashHistory';

import { Home } from 'containers';

const history = createHistory();

export default (store) => (
  <Router history={history}>
    <Route path="/" component={Home} ></Route>
  </Router>
);
