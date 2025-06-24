import React from 'react';
import UserDetails from './UserDetails';

const UserCard = ({ user }) => {
  return (
    <div className='card'>
      <h2>{user.name}</h2>
      <UserDetails email={user.email} location={user.location} />
    </div>
  );
};

export default UserCard;
