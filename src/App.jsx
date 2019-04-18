import React, { Component, Fragment } from "react";
import UserList from "./components/UserList";
import UserDetail from "./components/UserDetail";
import "./assets/style.css";
import { fetchUsers } from "./services";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <UserList myUsers={fetchUsers()} />
        <UserDetail />
      </Fragment>
    );
  }
}
