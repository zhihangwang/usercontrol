import React, { Component } from "react";
import { Layout, Menu } from "antd";
import {
  AppstoreOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from "@ant-design/icons";

import { NavLink } from "react-router-dom";

const { Sider } = Layout;
const { SubMenu } = Menu;

export class AppMenu extends Component<IMenuProps> {
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
      <Sider>
        <Menu
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
          selectedKeys={[`/${this.props.location.pathname.split("/")[1]}`]}
        >
          <Menu.Item key="/">
            <PieChartOutlined />
            <NavLink to="/">
              <span>Home</span>
            </NavLink>
          </Menu.Item>

          <Menu.Item key="/User">
            <PieChartOutlined />
            <NavLink to="/User">
              <span>User</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="/Role">
            <DesktopOutlined />
            <NavLink to="/Role">
              <span>Role</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="4">
            <ContainerOutlined />
            <NavLink to="/Resource">
              <span>Resource</span>
            </NavLink>
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
    );
  }
}

export interface IMenuProps {
  location: {
    pathname: string;
  };
  history: any;
  match: any;
}

export default AppMenu;
