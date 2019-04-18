import React, { Component } from "react";
import { array, func } from "prop-types";
import { connect } from "react-redux";
import { selectUser } from "../../redux/user";
import UserList from "./UserList";

class UserListContainer extends Component {
  render() {
    const { myUsers, selectUser } = this.props;
    return <UserList users={myUsers} selectUser={selectUser} />;
  }
}

UserListContainer.propTypes = {
  myUsers: array,
  selectUser: func
};

const mapDispatchToProps = dispatch => ({
  selectUser: user => dispatch(selectUser(user))
});

export default connect(
  null,
  mapDispatchToProps
)(UserListContainer);
