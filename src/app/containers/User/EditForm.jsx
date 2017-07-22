import React from 'react';
import { Modal, Form, Input, Select } from 'antd';
import { recordTransformFormData } from '#/libs/form/FormHelper';
const FormItem = Form.Item;
const Option = Select.Option;

class EditForm extends React.Component {

  render() {
    const { title, onClick, form } = this.props;
    const { getFieldDecorator } = form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
      },
    };

    return (
      <Modal
        title={title}
        visible
        onOk={() => onClick('ok', this.props.form)}
        onCancel={() => onClick('cancel', this.props.form)}
        okText="确认"
        cancelText="取消"
      >
        <Form onSubmit={this.handleSubmit}>
          <FormItem
            {...formItemLayout}
            label="姓名"
            hasFeedback
          >
            {getFieldDecorator('name', {
              rules: [
                { required: true, message: '姓名不能为空' }
              ],
            })(
              <Input placeholder="请输入你的姓名" />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="居住城市"
            hasFeedback
          >
            {getFieldDecorator('city', {
              rules: [
                { required: true, message: '居住城市不能为空' },
              ],
            })(
              <Select placeholder="请选择你的居住城市">
                <Option value="武汉">武汉</Option>
                <Option value="北京">北京</Option>
                <Option value="深圳">深圳</Option>
                <Option value="上海">上海</Option>
                <Option value="杭州">杭州</Option>
              </Select>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="邮箱地址"
            hasFeedback
          >
            {getFieldDecorator('email', {
              rules: [{
                type: 'email', message: '请输入正确的邮箱地址',
              }, {
                required: true, message: '邮箱地址不能为空',
              }],
            })(
              <Input placeholder="请输入你的邮箱地址" />
            )}
          </FormItem>
        </Form>
      </Modal>
    );
  }
}
// 参考：https://ant.design/components/form-cn/ From.create 配置项 mapPropsToFields
export default Form.create({
  mapPropsToFields: (props) => recordTransformFormData(props.record)
})(EditForm);
