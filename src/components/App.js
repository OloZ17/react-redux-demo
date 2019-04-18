import React, { Component, Fragment } from "react";
import UserList from "./user_list";
import UserDetail from "./user_detail";
import "../assets/style.css";
import { fetchUsers } from "../services";

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
