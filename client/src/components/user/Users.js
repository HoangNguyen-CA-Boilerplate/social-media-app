import React from 'react';
import User from './User';

function Users({ users }) {
  if (!users) return null;
  return users.map((user) => <User key={user._id} user={user}></User>);
}

export default Users;
