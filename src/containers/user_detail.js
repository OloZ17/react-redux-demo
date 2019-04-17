import React, { Component } from "react";
import { object } from "prop-types";
import { connect } from "react-redux";

class UserDetail extends Component {
  render() {
    const { myActiveUser } = this.props;
    if (!myActiveUser) {
      return <div>Sélectionner un utilisateur </div>;
    }

    return (
      <div>
        <h3>Détail de {myActiveUser.name}</h3>
        <ul>
          <li>Id : {myActiveUser.id}</li>
        </ul>
      </div>
    );
  }
}

UserDetail.propTypes = {
  myActiveUser: object
};

var mapStateToProps = state => {
  return {
    myActiveUser: state.activeUser
  };
};

export default connect(mapStateToProps)(UserDetail);
