import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import { syncHistoryWithStore } from 'react-router-redux';
import createHistory from 'history/createHashHistory';
// import createHistory from 'history/createBrowserHistory';

import Store from './config/store';
import App from './app/App';

const history = syncHistoryWithStore(createHistory(), Store);
const hotRender = (Aplication) => {
  render(
    <AppContainer>
      <Provider store={Store}>
        <Router history={history}>
          <Switch>
            <Route path="/" component={Aplication} />
          </Switch>
        </Router>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
};

hotRender(App);

// 热更新
if (module.hot) {
  module.hot.accept('./app/App', () => hotRender(App));
}
