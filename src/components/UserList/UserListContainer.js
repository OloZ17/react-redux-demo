import React from 'react';
import { array } from 'prop-types';
import { useDispatch } from 'react-redux';
import { selectUser } from '../../redux/user';
import UserList from './UserList';

const UserListContainer = (props) => {
  const { myUsers } = props;
  const dispatch = useDispatch();

  const selectedUser = (user) => dispatch(selectUser(user));

  return <UserList users={myUsers} selectedUser={selectedUser} />;
};

UserListContainer.propTypes = {
  myUsers: array,
};

export default UserListContainer;
