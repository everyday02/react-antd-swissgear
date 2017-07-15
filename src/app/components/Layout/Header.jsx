import React from 'react';
import { Layout, Icon, Menu } from 'antd';
import { Link } from 'react-router-dom';

require('./Header.scss');

const { Header } = Layout;
const { SubMenu } = Menu;

export default class LayoutHeader extends React.Component {

  handleLogOut = () => {
    const { logout } = this.props;
    logout().payload.promise.then(() => {
      this.props.history.replace('/login');
    });
  }

  render() {
    const { onToggle, collapsed } = this.props;
    return (
      <Header className="layout-header">
        <Icon
          className="trigger"
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={onToggle}
        />
        <Menu mode="horizontal" className="user-menus" onClick={this.clear}>
          <SubMenu
            title={<span><Icon type="user" />管理员</span>}
          >
            <Menu.Item key="logOut">
              <Link to="/login" >退出</Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Header>
    );
  }
}
