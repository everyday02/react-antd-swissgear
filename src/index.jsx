import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Store from './config/store';
import App from './app/App';

const hotRender = (Aplication) => {
  render(
    <AppContainer>
      <Provider store={Store}>
        <Aplication />
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
