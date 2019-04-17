import React, { Component } from "react";
import UserList from "../containers/user_list";
import "../assets/style.css";

export default class App extends Component {
  render() {
    // return <div>{UserList}</div>;
    //return <div>toto</div>;
    return <><UserList/></>
  }
}
