import React from 'react';
import { useParams } from 'react-router-dom';

import ProfileDisplay from './ProfileDisplay';
import Posts from '../../components/post/Posts';
import LoadAsync from '../../components/LoadAsync';

import { getUser, getUserPosts } from '../../APIUtils';

import { useSelector } from 'react-redux';
import { selectUser } from '../../store/slices/authSlice';
import useAsync from '../../hooks/useAsync';

function Profile() {
  const { username } = useParams();
  const user = useAsync(getUser, [username]);
  const posts = useAsync(getUserPosts, [username]);

  const authUser = useSelector(selectUser);
  let auth = false;

  if (authUser._id === user.data?._id) auth = true;

  return (
    <>
      <LoadAsync {...user}>
        <ProfileDisplay user={user.data} auth={auth}></ProfileDisplay>
      </LoadAsync>
      <LoadAsync {...posts}>
        <Posts posts={posts.data}></Posts>
      </LoadAsync>
    </>
  );
}

export default Profile;
