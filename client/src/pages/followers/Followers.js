import React from 'react';
import { useParams } from 'react-router-dom';
import Followers from './FollowersData';
import FollowNav from '../../components/FollowNav';
import LayoutHeader from '../../components/layout/LayoutHeader';

function UserFollowers() {
  const { username } = useParams();
  return (
    <>
      <LayoutHeader>{username}</LayoutHeader>
      <FollowNav username={username}></FollowNav>
      <Followers username={username}></Followers>
    </>
  );
}

export default UserFollowers;
