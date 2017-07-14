import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, HashRouter as Router } from 'react-router-dom';
import createHistory from 'history/createHashHistory';

import homeContainer from 'containers/Home/Home';

const history = createHistory();

@connect(
  (state) => state,
  (dispatch) => bindActionCreators({}, dispatch)
)
export default class App extends React.Component {

  render() {
    return (
      <Router history={history}>
        <Route
          render={({ location }) => (
            <div key={location.pathname}>
              <Route location={location} exact path="/" component={homeContainer} />
            </div>
          )
      } />
      </Router>
    );
  }
}
