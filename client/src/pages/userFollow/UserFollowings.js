import React from 'react';
import Followings from './Followings';
import Layout from '../../components/Layout';

import { useParams } from 'react-router-dom';

function UserFollowings() {
  const { username } = useParams();
  return (
    <Layout header={`${username}`}>
      <Followings username={username}></Followings>
    </Layout>
  );
}

export default UserFollowings;
