import React from 'react';
import { Breadcrumb, Layout } from 'antd';

const { Content } = Layout;

export default class LayoutContent extends React.Component {

  render() {
    return (
      <Content style={{ margin: '24px', overflow: 'initial' }}>
        <Breadcrumb style={{ margin: '0px 0px 18px 0px' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ background: '#fff', padding: '12px 24px', minHeight: 450 }}>
          {this.props.children}
        </div>
      </Content>
    );
  }
}
