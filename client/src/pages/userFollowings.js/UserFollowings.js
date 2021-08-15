import React from 'react';
import Followings from './Followings';
import FollowNav from '../../components/FollowNav';
import LayoutHeader from '../../components/layout/LayoutHeader';

import { useParams } from 'react-router-dom';

function UserFollowings() {
  const { username } = useParams();
  return (
    <>
      <LayoutHeader>{username}</LayoutHeader>
      <FollowNav username={username}></FollowNav>
      <Followings username={username}></Followings>
    </>
  );
}

export default UserFollowings;
