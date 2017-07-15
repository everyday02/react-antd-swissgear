import React from 'react';
import { Layout, Icon } from 'antd';

const { Header } = Layout;

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
      <Header style={{ background: '#fff', padding: 0, height: 48, lineHeight: '48px' }}>
        <Icon
          className="trigger"
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={onToggle}
        />
      </Header>
    );
  }
}
