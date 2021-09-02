import React, { useEffect } from 'react';
import LoadAsync from '../../components/loadAsync/LoadAsync';
import LayoutMessage from '../../components/layout/LayoutMessage';
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
    dispatch(likePost({ id }));
  };

  const onDeletePost = (id) => {
    dispatch(deletePost({ id }));
  };

  const postsStatus = useSelector(selectUserLikedPostsStatus);
  const posts = useSelector(selectUserLikedPosts);
  const postsError = useSelector(selectUserLikedPostsError);

  return (
    <LoadAsync loading={postsStatus === 'loading'} error={postsError}>
      {posts.length !== 0 ? (
        <Posts posts={posts} onLike={onLikePost} onDelete={onDeletePost} />
      ) : (
        <LayoutMessage sub='When they like a post, it will show up here.'>
          This has user no likes yet
        </LayoutMessage>
      )}
    </LoadAsync>
  );
}

export default ProfileLikedPostss;
