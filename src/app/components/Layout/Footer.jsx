import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

export default class LayoutFooter extends React.Component {

  render() {
    return (
      <Footer style={{ textAlign: 'center', background: '#fff' }}>
        React antd swissgear ©2016 Created by HeHang
      </Footer>
    );
  }
}
