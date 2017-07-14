import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getRoutes from '../config/route';

@connect(
  (state) => state,
  (dispatch) => bindActionCreators({}, dispatch)
)
export default class App extends React.Component {

  render() {
    return (
      <div>
        {getRoutes()}
      </div>
    );
  }
}
