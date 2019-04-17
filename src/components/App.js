import React, { Component, Fragment } from "react";
import UserList from "../containers/user_list";
import UserDetail from "../containers/user_detail";
import "../assets/style.css";

export default class App extends Component {
  render() {
    // return <div>{UserList}</div>;
    //return <div>toto</div>;
    return (
      <Fragment>
        <UserList />
        <UserDetail />
      </Fragment>
    );
  }
}
