import React, { Component } from "react";
import { object } from "prop-types";
import { connect } from "react-redux";
import { getActiveUser } from "../../redux/user";
import UserDetail from "./UserDetail";

class UserDetailContainer extends Component {
  render() {
    return <UserDetail activeUser={this.props.myActiveUser} />;
  }
}

UserDetailContainer.propTypes = {
  // activeUser: object,
  myActiveUser: object
};

const mapStateToProps = state => ({
  // activeUser: state.activeUser,
  myActiveUser: getActiveUser(state)
});

export default connect(mapStateToProps)(UserDetailContainer);
