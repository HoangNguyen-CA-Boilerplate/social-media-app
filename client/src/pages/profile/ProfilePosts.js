import React, { useEffect } from 'react';
import LoadAsync from '../../components/loadAsync/LoadAsync';
import Posts from '../../components/post/Posts';

import {
  getPosts,
  deletePost,
  likePost,
  selectUserPostsStatus,
  selectUserPosts,
  selectUserPostsError,
} from '../../store/slices/userPostsSlice.js';

import { useSelector, useDispatch } from 'react-redux';

function ProfilePosts({ username }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts({ username }));
  }, [dispatch, username]);

  const onLikePost = (id) => {
    dispatch(likePost(id));
  };

  const onDeletePost = (id) => {
    dispatch(deletePost(id));
  };

  const posts = useSelector(selectUserPosts);
  const postsStatus = useSelector(selectUserPostsStatus);
  const postsError = useSelector(selectUserPostsError);

  return (
    <LoadAsync loading={postsStatus === 'loading'} error={postsError}>
      <Posts posts={posts} onLike={onLikePost} onDelete={onDeletePost} />
    </LoadAsync>
  );
}

export default ProfilePosts;
