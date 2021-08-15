import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ProfileDisplay from './ProfileDisplay';
import Posts from '../../components/post/Posts';
import LoadAsync from '../../components/LoadAsync';
import LayoutHeader from '../../components/layout/LayoutHeader';

import { useSelector, useDispatch } from 'react-redux';
import {
  selectUser,
  selectUserStatus,
  selectUserError,
  selectUserPosts,
  likeUserPost,
  deleteUserPost,
  getUserPosts,
  getUser,
  followUser,
  selectUserPostsStatus,
  selectUserPostsError,
} from '../../store/slices/userSlice';
import { selectUser as selectAuthUser } from '../../store/slices/authSlice';

function Profile() {
  const { username } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser({ username }));
    dispatch(getUserPosts({ username }));
  }, [dispatch, username]);

  const user = useSelector(selectUser);
  const userStatus = useSelector(selectUserStatus);
  const userError = useSelector(selectUserError);

  const posts = useSelector(selectUserPosts);
  const postsStatus = useSelector(selectUserPostsStatus);
  const postsError = useSelector(selectUserPostsError);
  const authUser = useSelector(selectAuthUser);

  const onLike = (id) => {
    dispatch(likeUserPost(id));
  };

  const onDelete = (id) => {
    dispatch(deleteUserPost(id));
  };

  const onFollow = () => {
    dispatch(followUser(username));
  };

  return (
    <>
      <LayoutHeader>{username}</LayoutHeader>
      <LoadAsync
        loading={userStatus === 'loading' || userStatus === 'initial'}
        error={userError}
      >
        <ProfileDisplay
          user={user}
          authUser={authUser}
          onFollow={onFollow}
        ></ProfileDisplay>
      </LoadAsync>
      <LoadAsync loading={postsStatus === 'loading'} error={postsError}>
        <Posts posts={posts} onLike={onLike} onDelete={onDelete} />
      </LoadAsync>
    </>
  );
}

export default Profile;
