import React from 'react';
import { useParams } from 'react-router-dom';
import Followers from './Followers';
import FollowNavbar from './FollowNavbar';

function UserFollowers() {
  const { username } = useParams();
  return (
    <>
      <FollowNavbar username={username}></FollowNavbar>
      <Followers username={username}></Followers>
    </>
  );
}

export default UserFollowers;
