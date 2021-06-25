import React from 'react';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';
import './assets/style.css';

const App = () => {
  return (
    <>
      <UserList />
      <UserDetail />
    </>
  );
};

export default App;
