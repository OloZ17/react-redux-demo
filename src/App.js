import React from 'react';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';
import './assets/style.css';
import { fetchUsers } from './services';

const App = () => {
  return (
    <>
      <UserList myUsers={fetchUsers()} />
      <UserDetail />
    </>
  );
};

export default App;
