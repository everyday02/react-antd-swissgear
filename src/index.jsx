import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

// import configureStore from './utils/store/configureStore';

import Root from './containers/Root';

const hotRender = (RootContainer) => (<AppContainer>
  <RootContainer />
</AppContainer>
);

render(
  hotRender(Root),
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const rootContainer = require('./containers/Root'); // eslint-disable-line global-require
    render(
      hotRender(rootContainer),
      document.getElementById('root')
    );
  });
}
