import React from "react";
import { array, func } from "prop-types";

const UserList = ({ users, selectUser }) => {
  return (
    <div>
      <ul className="col-md-4">
        {users.map(user => (
          <li className="list-group-item" key={user.id} onClick={() => selectUser(user)}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

UserList.propTypes = {
  users: array,
  selectUser: func
};

export default UserList;
