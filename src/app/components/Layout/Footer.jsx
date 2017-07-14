import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

export default class commonFooter extends React.Component {

  render() {
    return (
      <Footer style={{ textAlign: 'center' }}>
        HeHang 版权所有 © 2015 xxxxxx.com
      </Footer>
    );
  }
}
