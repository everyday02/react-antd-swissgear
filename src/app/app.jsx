import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Layout } from 'antd';

import { Footer, Header, Content, Sider } from '@/components/Layout';

import getRoutes from '../config/route';

@connect(
  (state) => state,
  (dispatch) => bindActionCreators({}, dispatch)
)
export default class App extends React.Component {

  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    const { collapsed } = this.state;
    return (
      <Layout className="ant-layout-has-sider" >
        <Sider collapsed={collapsed} />
        <Layout >
          <Header
            onToggle={this.toggle}
            collapsed={collapsed}
          />
          <Content >
            <div style={{ background: '#fff', padding: 24, minHeight: 540 }}>
              {getRoutes()}
            </div>
          </Content>
          <Footer />
        </Layout>
      </Layout>
    );
  }
}
