import React, { Component } from "react";
import { Table, Row, Col, Button } from "antd";
import { ColumnType } from "antd/lib/table";
//import { GetUserList, CreateUser, RemoveUser } from "./Api";
import moment from "moment";
import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";
import { UserBusiness, IUserBusiness } from "../../business/user/user";
import CreateUser from "./CreateUser";
import { IUserModel } from "@common/interface";

@inject(UserBusiness)
@observer
class User extends Component<IUserProps, IUserState> {
  constructor(props: IUserProps) {
    super(props);
    console.log(this.props);
  }

  componentDidMount() {
    this.props.getUserList();
  }

  createUser = () => {
    this.setState({ isCreate: true });
  };

  // submitCreateUser = () => {
  //   const now = new Date();
  //   const user: UserModel = {
  //     id: this.guid(),
  //     userName: "Jason" + now.getMilliseconds().toString(),
  //     firstName: Math.ceil(Math.random() * 10000).toString(),
  //     lastName: Math.ceil(Math.random() * 10000).toString(),
  //     sex: now.getMilliseconds() % 2 === 0 ? "男" : "女",
  //     age: Math.ceil(Math.random() * 100),
  //     birthday: now.toString(),
  //   };
  //   const userList = CreateUser(user);
  //   this.setState({ userList: userList, isCreate: false });
  // };

  // cancel = () => {
  //   this.setState({ isCreate: false });
  // };

  columns: ColumnType<any>[] = [
    {
      title: "UserName",
      dataIndex: "userName",
      sorter: true,
      render: (userName: string, rowRaw: IUserModel) => {
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
              this.props.deleteUser(id);
            }}
          >
            Delete
          </Button>
        );
      },
    },
  ];

  tableChange = () => {};

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
            <Button onClick={this.props.toggleShowCreateModel}>Add User</Button>
            <CreateUser
              isShowCreateModel={this.props.isShowCreateModel}
              toggleShowCreateModel={this.props.toggleShowCreateModel}
              createUser={this.props.createUser}
            />
          </Col>
        </Row>
        <Table
          dataSource={this.props.userList}
          columns={this.columns}
          onChange={this.tableChange}
        />
      </div>
    );
  }
}

interface IUserProps extends IUserBusiness {}

interface IUserState {}

export default User;
