import { useEffect } from 'react';

import LoadAsync from '../../components/loadAsync/LoadAsync';
import CreatePost from '../../components/createPost/CreatePost';
import Posts from '../../components/post/Posts';
import LayoutHeader from '../../components/layout/LayoutHeader';

import {
  getPosts,
  selectPosts,
  selectPostsError,
  deletePost,
  likePost,
  selectPostsStatus,
} from '../../store/slices/postsSlice';
import { useDispatch, useSelector } from 'react-redux';

function Home() {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const postsStatus = useSelector(selectPostsStatus);
  const postsError = useSelector(selectPostsError);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const onDelete = (id) => {
    dispatch(deletePost({ id }));
  };

  const onLike = (id) => {
    dispatch(likePost({ id }));
  };

  return (
    <>
      <LayoutHeader>Home</LayoutHeader>
      <CreatePost />
      <LoadAsync loading={postsStatus === 'loading'} error={postsError}>
        <Posts posts={posts} onDelete={onDelete} onLike={onLike} />
      </LoadAsync>
    </>
  );
}

export default Home;
