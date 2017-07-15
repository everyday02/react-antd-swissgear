import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
// import { createBrowserHistory as createHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '@/reducers/index';

const loggerMiddleware = createLogger();

const configureStore = (history) => createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
      routerMiddleware(history)   // routerMiddleware
    )
  )
);

export default configureStore;
