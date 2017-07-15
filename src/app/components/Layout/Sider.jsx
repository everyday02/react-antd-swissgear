import React from 'react';
import { connect } from 'react-redux';
import { Layout, Menu, Icon } from 'antd';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
// import swissgear from '&/logo.png';

const { Sider } = Layout;

@connect(
  (state) => state,
  (dispatch) => bindActionCreators({}, dispatch)
)
export default class LayoutSider extends React.Component {

  render() {
    const { collapsed } = this.props;
    const pathname = window.location.hash.replace('#', '');
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
        <Menu theme="dark" mode="inline" defaultSelectedKeys={[pathname]}>
          <Menu.Item key="1">
            <Link to="/">
              <Icon type="home" />
              <span>首页</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="/user">
            <Link to="/user">
              <Icon type="user" />
              <span>用户管理</span>
            </Link>
          </Menu.Item>
          {/*
          <Menu.Item key="3">
            <Icon type="file-text" />
            <span>可编辑表格</span>
          </Menu.Item>
          <Menu.Item key="4">
            <Icon type="heart-o" />
            <span>项目地址</span>
          </Menu.Item>
          */}
        </Menu>
      </Sider>
    );
  }
}
