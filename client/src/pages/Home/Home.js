import React from 'react';
import useAsync from '../../hooks/useAsync';
import useTokenConfig from '../../hooks/useTokenConfig';

import { getPosts } from '../../APIUtils';

import styled from 'styled-components';

import Posts from '../../components/post/Posts';
import LoadAsync from '../../components/LoadAsync';

const Container = styled.div``;

function Home() {
  const tokenConfig = useTokenConfig();
  const posts = useAsync(getPosts, [tokenConfig]);
  console.log(posts.data);

  return (
    <Container>
      <LoadAsync {...posts}>
        <Posts posts={posts.data} />
      </LoadAsync>
    </Container>
  );
}

export default Home;
