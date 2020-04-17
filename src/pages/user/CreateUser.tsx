import React, { Component } from "react";
import { Form, Input, Radio, InputNumber, DatePicker, Modal } from "antd";
import { IUserModel } from "@common/interface";
import moment from "moment";

export class EditUser extends Component<ICreateUserProps> {
  submitCreateUser = (user: IUserModel) => {
    this.props.createUser(user);
    this.props.toggleShowCreateModel();    
  };

  render() {
    return (
      <div>
        <FormModal
          isShowCreateModel={this.props.isShowCreateModel}
          toggleShowCreateModel={this.props.toggleShowCreateModel}
          submitCreateUser={this.submitCreateUser}
        ></FormModal>
      </div>
    );
  }
}

const FormModal = (props: {
  isShowCreateModel: boolean;
  toggleShowCreateModel: () => void;
  submitCreateUser: (user: IUserModel) => void;
}) => {
  const [form] = Form.useForm();
  const formItemLayout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 14,
    },
  };
  const submit = () => {
    form
      .validateFields()
      .then((values) => {
        const {
          userName,
          firstName,
          lastName,
          sex,
          birthday,
          age,
          password,
          email,
        } = values;
        props.submitCreateUser({
          id: "",
          userName: userName,
          sex: sex,
          birthday: moment(birthday).format("MM/dd/yyyy hh:mm:ss"),
          firstName: firstName,
          lastName: lastName,
          age: age,
          password: password,
          email: email,
        });
        form.resetFields();
      })
      .catch((error) => {
        console.log(error);
      });
    // props.submitCreateUser(form);
  };

  return (
    <div>
      <Modal
        visible={props.isShowCreateModel}
        okText="Submit"
        cancelText="Cancel"
        onOk={submit}
        onCancel={props.toggleShowCreateModel}
        closable={false}
        width="600px"
      >
        <p>
          <span>
            <h2>Create User</h2>
          </span>
        </p>
        <Form {...formItemLayout} layout="horizontal" form={form} size="middle">
          <Form.Item
            className="FormItem"
            label="User Name"
            name="userName"
            rules={[
              {
                required: true,
                message: "Please input UserName!",
              },
            ]}
          >
            <Input placeholder="User Name" />
          </Form.Item>
          <Form.Item
            className="FormItem"
            name="email"
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            className="FormItem"
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            className="FormItem"
            name="confirm"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(
                    "The two passwords that you entered do not match!"
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item className="FormItem" label="First Name" name="firstName">
            <Input placeholder="First Name" />
          </Form.Item>
          <Form.Item className="FormItem" label="Last Name" name="lastName">
            <Input placeholder="Last Name" />
          </Form.Item>
          <Form.Item className="FormItem" label="Sex" name="sex">
            <Radio.Group defaultValue={"1"}>
              <Radio value="1">Man</Radio>
              <Radio value="2">Woman</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            className="FormItem"
            name="age"
            label="Age"
            rules={[
              {
                required: true,
                type: "number",
                min: 0,
                max: 99,
                message: "Age error,Please input sure Age.",
              },
            ]}
          >
            <InputNumber min={0} max={99} width="500px" />
          </Form.Item>
          <Form.Item
            className="FormItem"
            name="birthday"
            label="Birthday"
            rules={[
              {
                required: true,
                message: "Please input your Birthday!",
              },
            ]}
          >
            <DatePicker />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

interface ICreateUserProps  {  
    isShowCreateModel: boolean;
    toggleShowCreateModel: () => void;
    createUser: (user: IUserModel) => void;
}

export default EditUser;
