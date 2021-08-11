import React from 'react';
import useAsync from '../hooks/useAsync';

import { getPosts } from '../APIUtils';

import styled from 'styled-components';

import Posts from '../components/post/Posts';
import LoadAsync from '../components/LoadAsync';

const Container = styled.div``;

function Home() {
  const posts = useAsync(getPosts, []);

  return (
    <Container>
      <LoadAsync {...posts}>
        <Posts posts={posts.data} />
      </LoadAsync>
    </Container>
  );
}

export default Home;
