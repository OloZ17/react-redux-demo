import React, { Component } from "react";
import { array, func } from "prop-types";
import { connect } from "react-redux";
import { selectUser } from "../actions/index";
import { bindActionCreators } from "redux";

class UserList extends Component {
  render() {
    return (
      <div>
        <ul className="col-md-4">
          {this.props.myUsers.map(user => {
            return (
              <li className="list-group-item" key={user.id} onClick={() => this.props.selectUser(user)}>
                {user.name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

UserList.propTypes = {
  myUsers: array,
  selectUser: func
};

var mapStateToProps = state => {
  return {
    myUsers: state.users
  };
};

var mapDispatchToProps = dispatch => {
  return bindActionCreators({ selectUser: selectUser }, dispatch);
};

// function mapStateToProps(state) {
//   return {
//     myUsers: state.users
//   };
// }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
