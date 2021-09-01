import React, { useEffect } from 'react';
import LoadAsync from '../../components/loadAsync/LoadAsync';
import Posts from '../../components/post/Posts';

import {
  getPosts,
  deletePost,
  likePost,
  selectUserLikedPostsStatus,
  selectUserLikedPosts,
  selectUserLikedPostsError,
} from '../../store/slices/userLikedPostsSlice.js';

import { useSelector, useDispatch } from 'react-redux';

function ProfileLikedPostss({ username }) {
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

  const postsStatus = useSelector(selectUserLikedPostsStatus);
  const posts = useSelector(selectUserLikedPosts);
  const postsError = useSelector(selectUserLikedPostsError);

  return (
    <LoadAsync loading={postsStatus === 'loading'} error={postsError}>
      <Posts posts={posts} onLike={onLikePost} onDelete={onDeletePost} />
    </LoadAsync>
  );
}

export default ProfileLikedPostss;
