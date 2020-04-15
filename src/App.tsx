import React, { Component } from "react";
import "./App.css";
import {
  AppstoreOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from "@ant-design/icons";

import { Layout, Menu } from "antd";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home';
import User from "./user/User";
import UserDetail from "./user/Detail";
import Role from "./role/Role";

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

class App extends Component {
  state = {
    collapsed: false,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Router>
        <Layout className="App">
          <Header className="Header">
            <Link to="/">
              <span>User Control</span>
            </Link>
          </Header>
          <Layout>
            <Sider>
              <Menu
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["1"]}
                mode="inline"
                theme="dark"
                inlineCollapsed={this.state.collapsed}
              >
                <Menu.Item key="1">
                  <PieChartOutlined />
                  <Link to="/User">
                    <span>User</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <DesktopOutlined />
                  <Link to="/Role">
                    <span>Role</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="3">
                  <ContainerOutlined />
                  <Link to="/Resource">
                    <span>Resource</span>
                  </Link>
                </Menu.Item>
                <SubMenu
                  key="sub1"
                  title={
                    <span>
                      <MailOutlined />
                      <span>Navigation One</span>
                    </span>
                  }
                >
                  <Menu.Item key="5">Option 5</Menu.Item>
                  <Menu.Item key="6">Option 6</Menu.Item>
                  <Menu.Item key="7">Option 7</Menu.Item>
                  <Menu.Item key="8">Option 8</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub2"
                  title={
                    <span>
                      <AppstoreOutlined />
                      <span>Navigation Two</span>
                    </span>
                  }
                >
                  <Menu.Item key="9">Option 9</Menu.Item>
                  <Menu.Item key="10">Option 10</Menu.Item>
                  <SubMenu key="sub3" title="Submenu">
                    <Menu.Item key="11">Option 11</Menu.Item>
                    <Menu.Item key="12">Option 12</Menu.Item>
                  </SubMenu>
                </SubMenu>
              </Menu>
            </Sider>
            <Content className="Page-Content">
              <Route path="/" exact component={Home}></Route>
              <Route path="/User" exact component={User}></Route>
              <Route path="/User/:id" exact component={UserDetail}></Route>
              <Route path="/Role" exact component={Role}></Route>
            </Content>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default App;
