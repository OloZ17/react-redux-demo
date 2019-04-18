import React, { Component } from "react";
import { object } from "prop-types";
import { connect } from "react-redux";
import { getActiveUser } from "../redux/user";

class UserDetail extends Component {
  render() {
    const { activeUser } = this.props;
    if (activeUser.id === 0) {
      return <div>Sélectionner un utilisateur </div>;
    }

    return (
      <div>
        <h3>Détail de {activeUser.name}</h3>
        <ul>
          <li>Id : {activeUser.id}</li>
        </ul>
      </div>
    );
  }
}

UserDetail.propTypes = {
  activeUser: object,
  myActiveUser: object
};

const mapStateToProps = state => ({
  activeUser: state.activeUser,
  myActiveUser: getActiveUser(state)
});

export default connect(mapStateToProps)(UserDetail);
