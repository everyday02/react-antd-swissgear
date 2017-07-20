import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
// import createHistory from 'history/createHashHistory';

import configureStore from './config/store';
import App from './app/App';

require('./theme/styles.scss');

const history = createHistory();
const store = configureStore(history);

const hotRender = (Aplication) => {
  render(
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route path="/" component={Aplication} />
          </Switch>
        </ConnectedRouter>
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
