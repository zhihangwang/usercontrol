import React, { Component } from "react";
import { Table, Row, Col, Button, Modal } from "antd";
import { ColumnType } from "antd/lib/table";
import { GetUserList, CreateUser, RemoveUser } from "./Api";
import moment from "moment";
import { UserModel } from "../common/Entity";
import { Link } from "react-router-dom";

class User extends Component {
  state = {
    userList: [],
    isCreate: false,
  };

  componentDidMount() {
    this.setState({ userList: GetUserList() });
  }

  tableChange = () => {
    console.log(1);
  };

  createUser = () => {
    this.setState({ isCreate: true });
  };

  submitCreateUser = () => {
    const now = new Date();
    const user: UserModel = {
      id: this.guid(),
      userName: "Jason" + now.getMilliseconds().toString(),
      firstName: Math.ceil(Math.random() * 10000).toString(),
      lastName: Math.ceil(Math.random() * 10000).toString(),
      sex: now.getMilliseconds() % 2 === 0 ? "男" : "女",
      age: Math.ceil(Math.random() * 100),
      birthday: now.toString(),
    };
    const userList = CreateUser(user);
    this.setState({ userList: userList, isCreate: false });
  };

  guid = () => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (
      c
    ) {
      var r = (Math.random() * 16) | 0,
        v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  };

  cancel = () => {
    this.setState({ isCreate: false });
  };

  columns: ColumnType<any>[] = [
    {
      title: "UserName",
      dataIndex: "userName",
      sorter: true,
      render: (userName: string, rowRaw: UserModel) => {        
        return <Link to={`/User/${rowRaw.id}`}>{userName}</Link>;
      },
    },
    {
      title: "FirstName",
      dataIndex: "firstName",
      sorter: true,
    },
    {
      title: "LstName",
      dataIndex: "lastName",
      sorter: true,
    },
    {
      title: "Sex",
      dataIndex: "sex",
      sorter: true,
    },
    {
      title: "Age",
      dataIndex: "age",
      sorter: true,
    },
    {
      title: "Birthday",
      dataIndex: "birthday",
      sorter: true,
      render: (birthday) => {
        return moment(birthday).format("MM/DD/YYYY HH:mm:ss");
      },
    },
    {
      title: "Action",
      dataIndex: "id",
      render: (id: string) => {
        return (
          <Button
            onClick={(e) => {
              this.deleteUser(id);
            }}
          >
            Delete
          </Button>
        );
      },
    },
  ];

  deleteUser = (userId: string) => {
    this.setState({ userList: RemoveUser(userId) });
  };

  render() {
    return (
      <div>
        <Row>
          <Col span={20} push={1}>
            <h3>
              <b>User List</b>
            </h3>
          </Col>
          <Col span={4} push={2}>
            <Button onClick={this.createUser}>Add User</Button>
            <Modal
              visible={this.state.isCreate}
              okText="Submit"
              cancelText="Cancel"
              onOk={this.submitCreateUser}
              onCancel={this.cancel}
              closable={false}
            >
              54345
            </Modal>
          </Col>
        </Row>
        <Table
          dataSource={this.state.userList}
          columns={this.columns}
          onChange={this.tableChange}
        />
      </div>
    );
  }
}

export default User;
