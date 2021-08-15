import React from 'react';
import Followings from './Followings';
import FollowNavbar from './FollowNavbar';

import { useParams } from 'react-router-dom';

function UserFollowings() {
  const { username } = useParams();
  return (
    <>
      <FollowNavbar username={username}></FollowNavbar>
      <Followings username={username}></Followings>
    </>
  );
}

export default UserFollowings;
