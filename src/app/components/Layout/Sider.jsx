import React from 'react';
import { Layout, Menu, Icon } from 'antd';
// import swissgear from '&/logo.png';

const { Sider } = Layout;

export default class LayoutSider extends React.Component {

  render() {
    const { collapsed } = this.props;
    return (
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className="logo" >
          {collapsed ? '' : 'Swissgear ' }
          &nbsp;
          <i style={{ fontSize: '24px' }} className="iconfont icon-maomi" />
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Icon type="home" />
            <span>首页</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="file-text" />
            <span>可编辑表格</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="heart-o" />
            <span>项目地址</span>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}
