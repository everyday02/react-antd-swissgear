import React from 'react';
import { Layout } from 'antd';

import Header from './Header';
import Footer from './Footer';

export default class commonLayout extends React.Component {

  render() {
    return (
      <Layout className="ant-layout-has-sider">
        <Layout>
          <Header />
          <div>
            主体内容区域22
          </div>
          <Footer />
        </Layout>
      </Layout>
    );
  }
}
