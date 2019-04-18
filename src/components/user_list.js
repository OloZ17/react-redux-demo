import React, { Component } from "react";
import { array, func } from "prop-types";
import { connect } from "react-redux";
import { selectUser } from "../redux/user";

class UserList extends Component {
  render() {
    return (
      <div>
        <ul className="col-md-4">
          {this.props.myUsers.map(user => (
            <li className="list-group-item" key={user.id} onClick={() => this.props.selectAnUser(user)}>
              {user.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

UserList.propTypes = {
  myUsers: array,
  selectAnUser: func
};

const mapDispatchToProps = dispatch => ({
  selectAnUser: user => dispatch(selectUser(user))
});

// function mapStateToProps(state) {
//   return {
//     myUsers: state.users
//   };
// }

export default connect(
  null,
  mapDispatchToProps
)(UserList);
