import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Table, message, Tooltip, Icon } from 'antd';

import actions from '@/actions';

@connect(
  (state) => state,
  (dispatch) => bindActionCreators({ ...actions.user }, dispatch)
)
export default class User extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      pageSize: 10
    };
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleShowSizeChange = this.handleShowSizeChange.bind(this);

    this.props.list(this.currentPage, this.pageSize);
  }

  handlePageChange(page, pageSize) {
    this.props.list(page, pageSize);
    this.setState({
      currentPage: page,
      pageSize
    });
  }

  handleShowSizeChange(current, pageSize) {
    this.props.list(1, pageSize);
    this.setState({
      currentPage: 1,
      pageSize
    });
  }

  handleUpdate() {
    this.props.put('430000198507283051');
    message.success('更新成功');
  }

  handleDelete() {
    message.success('删除成功');
  }

  renderTable() {
    const { datas, total } = this.props.user;

    const columns = [{
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    }, {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '居住城市',
      dataIndex: 'city',
      key: 'city',
    }, {
      title: '邮箱地址',
      dataIndex: 'email',
      key: 'email',
    }, {
      title: '访问ip',
      dataIndex: 'ip',
      key: 'ip',
    }, {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <span>
          <Tooltip placement="top" title="编辑">
            <Icon
              type="edit"
              className="blue a-hover size"
              onClick={this.handleUpdate}
            />
          </Tooltip>
          &nbsp;&nbsp;
          <Tooltip placement="top" title="删除">
            <Icon
              type="delete"
              className="red a-hover size"
              onClick={this.handleDelete}
            />
          </Tooltip>
        </span>
      )
  }];
    return (<Table
      dataSource={datas}
      columns={columns}
      locale={{ emptyText: '还没有数据' }}
      pagination={{
        showTotal: (t) => `共 ${t} 条`,
        showQuickJumper: true,
        showSizeChanger: true,
        pageSizeOptions: ['10', '20', '40'],
        current: this.state.currentPage,
        pageSize: this.state.pageSize,
        onChange: this.handlePageChange,
        onShowSizeChange: this.handleShowSizeChange,
        total: total
      }}
    />);
  }

  render() {
    return (
      <div>
        {this.renderTable()}
      </div>
    );
  }
}
