import React, { Component, Fragment } from "react";
import UserList from "../containers/user_list";
import UserDetail from "../containers/user_detail";
import "../assets/style.css";
import { fetchUsers } from "../services";

export default class App extends Component {
  render() {
    // return <div>{UserList}</div>;
    //return <div>toto</div>;
    return (
      <Fragment>
        <UserList myUsers={fetchUsers()} />
        <UserDetail />
      </Fragment>
    );
  }
}
