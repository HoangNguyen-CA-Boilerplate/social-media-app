import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styled from 'styled-components';

import {
  getPosts,
  selectPosts,
  selectGetPostsStatus,
} from '../store/slices/postSlice';

import Posts from '../components/post/Posts';
import Spinner from '../components/Spinner';

const Container = styled.div``;

function Home() {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const getPostsStatus = useSelector(selectGetPostsStatus);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container>
      {getPostsStatus === 'loading' ? <Spinner /> : <Posts posts={posts} />}
    </Container>
  );
}

export default Home;
