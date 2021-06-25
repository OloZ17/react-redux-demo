import React from 'react';
import { useSelector } from 'react-redux';
import { getActiveUser } from '../../redux/user';
import UserDetail from './UserDetail';

const UserDetailContainer = () => {
  const myActiveUser = useSelector((state) => getActiveUser(state));
  return <UserDetail activeUser={myActiveUser} />;
};

export default UserDetailContainer;
