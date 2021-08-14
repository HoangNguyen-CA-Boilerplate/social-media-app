import React from 'react';
import { useParams } from 'react-router-dom';
import Followers from './Followers';
import Layout from '../../components/Layout';

function UserFollowers() {
  const { username } = useParams();
  return (
    <Layout header={username}>
      <Followers username={username}></Followers>
    </Layout>
  );
}

export default UserFollowers;
