import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: ${({ theme }) => theme.padding.main};
`;

const Title = styled.h2``;
const Text = styled.p``;

function Post({ title, text }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </Container>
  );
}

export default Post;
