import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { HashRouter as Router } from 'react-router-dom';
import createHistory from 'history/createHashHistory';

import Store from './config/store';
import App from './app/App';

require('./theme/styles');

const history = createHistory();
const hotRender = (Aplication) => {
  render(
    <AppContainer>
      <Provider store={Store}>
        <Router history={history}>
          <Aplication />
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
