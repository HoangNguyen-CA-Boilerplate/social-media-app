import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { getPosts, selectPosts } from '../store/slices/postSlice';
import Post from '../components/post/Post';
import Spinner from '../components/Spinner';

const Container = styled.div`
  width: 100%;
`;

function Home() {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <Container>
      <h1>Home</h1>
      {posts.map(({ title, text }) => (
        <Post title={title} text={text} />
      ))}
      <Spinner />
    </Container>
  );
}

export default Home;
