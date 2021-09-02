import React, { useEffect } from 'react';
import LoadAsync from '../../components/loadAsync/LoadAsync';
import LayoutMessage from '../../components/layout/LayoutMessage';
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
    dispatch(likePost({ id }));
  };

  const onDeletePost = (id) => {
    dispatch(deletePost({ id }));
  };

  const posts = useSelector(selectUserPosts);
  const postsStatus = useSelector(selectUserPostsStatus);
  const postsError = useSelector(selectUserPostsError);

  return (
    <LoadAsync loading={postsStatus === 'loading'} error={postsError}>
      {posts.length !== 0 ? (
        <Posts posts={posts} onLike={onLikePost} onDelete={onDeletePost} />
      ) : (
        <LayoutMessage sub='When you create posts, they will show up here.'>
          This user has no posts yet
        </LayoutMessage>
      )}
    </LoadAsync>
  );
}

export default ProfilePosts;
