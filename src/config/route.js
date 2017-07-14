import React from 'react';
import { Route } from 'react-router';

import { Home } from '@/containers';

export default (store) => (
  <Route path="/" component={Home} ></Route>
);
