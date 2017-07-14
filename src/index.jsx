import React from 'react';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from 'reducers/index';
import App from './app/app';

const middleware = routerMiddleware(history);
const middlewares = [thunk, middleware];
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

const hotRender = (Component) => {
  render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
};

hotRender(App);

// 热更新
if (module.hot) {
  module.hot.accept('./app/app', () => hotRender(App));
}
