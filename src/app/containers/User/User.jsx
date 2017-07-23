import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Table, Modal, Button, Row, message, Tooltip, Icon } from 'antd';

import actions from '@/actions';

import EditForm from './EditForm';

@connect(
  (state) => state,
  (dispatch) => bindActionCreators({ ...actions.user }, dispatch)
)
export default class User extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      pageSize: 10,
      record: {},
      modalType: 'post',     // post || put
      editFormVisible: false
    };
    this.fetchList = this.fetchList.bind(this);
    this.handleModal = this.handleModal.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

    this.props.list(this.state.currentPage, this.state.pageSize);
  }

  fetchList(currentPage, pageSize) {
    this.props.list(currentPage, pageSize);
    this.setState({
      currentPage,
      pageSize
    });
  }

  handleModal(key, form) {
    const callback = (result) => {
      message.success(result.msg);
      this.fetchList(this.state.currentPage, this.state.pageSize);
    };
    form.validateFields((err, values) => {
      if (key === 'ok') {
        if (err) return;
        if (this.state.modalType === 'post') this.props.post(values).then((result) => callback(result));
        else this.props.put(this.state.record.id, values).then((result) => callback(result));
      }
      this.setState({ editFormVisible: false });
    });
  }

  handleAdd() {
    this.setState({
      record: null,
      modalType: 'post',
      editFormVisible: true
    });
  }

  handleUpdate(record) {
    this.setState({
      record: record,
      modalType: 'put',
      editFormVisible: true
    });
  }

  handleDelete(id) {
    this.props.del(id).then((result) => {
      console.info(result);
      message.success('删除成功');
      this.fetchList(this.state.currentPage, this.state.pageSize);
    });
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
      title: '访问IP',
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
              onClick={() => this.handleUpdate(record)}
            />
          </Tooltip>
          &nbsp;&nbsp;
          <Tooltip placement="top" title="删除">
            <Icon
              type="delete"
              className="red a-hover size"
              onClick={() => Modal.confirm({
                  title: '提示',
                  content: `确定删除用户${record.name}吗?`,
                  onOk: () => this.handleDelete(record.id)
                })
              }
            />
          </Tooltip>
        </span>
      )
  }];
    return (<Table
      rowKey="id"
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
        onChange: (page, pageSize) => this.fetchList(page, pageSize),
        onShowSizeChange: (currentPage, pageSize) => this.fetchList(1, pageSize),
        total: total
      }}
    />);
  }

  render() {
    return (
      <div>
        <Row className="text-right padding-type-01">
          <Button onClick={this.handleAdd}>添加用户</Button>
        </Row>
        {this.renderTable()}
        {this.state.editFormVisible ? (
          <EditForm
            modalType={this.state.modalType}
            record={this.state.record}
            onClick={this.handleModal}
          />
          ) : ''
        }
      </div>
    );
  }
}
