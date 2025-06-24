import React from 'react';

const UserDetails = ({ email, location }) => {
  return (
    <div>
      <p>Email: {email}</p>
      <p>Location: {location}</p>
    </div>
  );
};

export default UserDetails;
