import React from 'react';
import './styles.css'
import UserCard from './components/UserCard';

const App = () => {
  const user = {
    name: 'Rohit Muchhal',
    email: 'rohit@gmail.com',
    location: 'Indore'
  };

  return (
    <div className='app-container'>
      <h1>User Profile</h1>
      <UserCard user={user} />
    </div>
  );
};

export default App;
