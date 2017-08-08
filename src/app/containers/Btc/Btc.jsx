import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Card } from 'antd';

import actions from '@/actions';

@connect(
  (state) => state,
  (dispatch) => bindActionCreators({ ...actions.btc }, dispatch)
)
export default class Btc extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      btcs: [],
      timer: null,
      orders: [
        { id: 'btccny', title: '比特币' },
        { id: '1stcny', title: '' },
        { id: 'anscny', title: '' },
        { id: 'btscny', title: '' },
        { id: 'dgdcny', title: '' },
        { id: 'eoscny', title: '' },
        { id: 'etccny', title: '' },
        { id: 'ethcny', title: '' },
        { id: 'gntcny', title: '' },
        { id: 'gxscny', title: '' },
        { id: 'qtumcny', title: '' },
        { id: 'repcny', title: '' },
        { id: 'sccny', title: '' },
        { id: 'sntcny', title: '' },
        { id: 'zeccny', title: '' },
        { id: 'zmccny', title: '' }
      ]
    };
    this.fetchList();
  }

  componentDidMount() {
    this.timer = setInterval(
      () => this.fetchList(),
      5000
     );
  }

  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }

  fetchList() {
    this.props.list().then((result) => {
      this.setState({
        btcs: result
      });
    });
  }

  render() {
    console.info(this.state.btcs);
    // const { btcs, orders } = this.state;
    return (
      <div>
        Btc Message
        {/*
          this.orders.map((item) => {
            btcs[item];
            console.info(item);
            return (
              <Card title="Card title" bordered={false}>Card content</Card>
            );
          })
        */}
      </div>
    );
  }
}
