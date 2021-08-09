import React from 'react';
import styled from 'styled-components';

function UserProfile({ user, auth }) {
  return (
    <div>
      <h2>{user.displayName}</h2>
      <p>@{user.username}</p>
      <h1>{auth && 'Auth'}</h1>
    </div>
  );
}

export default UserProfile;
