import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { Layout } from "antd";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import User from "./pages/user/User";
//import UserDetail from "./pages/user/Detail";
import Role from "./pages/role/Role";
import { Provider } from "mobx-react";
import { configure } from "mobx";
import { AppMenu } from "./pages/menu/menu";
import Store, { UserControl } from "./store/store";
import "./index.css";

const { Header, Content } = Layout;

configure({
  enforceActions: "always",
});

interface AppWindow extends Window {
  store: UserControl;
}
declare let window: AppWindow;
window.store ={...Store};

const page = () => {
  return (
    <Provider store={window.store}>
      <Router>
        <Layout className="App">
          <Header className="Header">
            <Link to="/">
              <span>User Control</span>
            </Link>
          </Header>
          <Layout>
            <AppMenu></AppMenu>
            <Content className="Page-Content">
              <Route path="/" exact component={Home}></Route>
              <Route path="/User" exact component={User}></Route>
              {/* <Route path="/User/:id" exact component={UserDetail}></Route> */}
              <Route path="/Role" exact component={Role}></Route>
            </Content>
          </Layout>
        </Layout>
      </Router>
    </Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>{page()}</React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
