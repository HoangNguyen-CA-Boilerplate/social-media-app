import React from 'react';
import UserDisplay from './UserDisplay';

function Users({ users }) {
  if (!users) return null;
  return users.map((user) => <UserDisplay user={user}></UserDisplay>);
}

export default Users;
