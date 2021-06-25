import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { selectUser } from '../../redux/user';
import { fetchUsers } from '../../services';
import UserList from './UserList';

const UserListContainer = () => {
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    setUsers(fetchUsers());
  }, []);
  const selectedUser = (user) => dispatch(selectUser(user));

  return <UserList users={users} selectedUser={selectedUser} />;
};

export default UserListContainer;
