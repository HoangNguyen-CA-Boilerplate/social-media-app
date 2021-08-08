import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Container = styled.div`
  padding: ${({ theme }) => theme.padding.main};
  border: 1px solid ${({ theme }) => theme.clrs.neutral[200]};
  margin-top: 1em;
  cursor: pointer;
`;

const Title = styled.h2``;
const Text = styled.p``;

function Post({ title, text, _id }) {
  const history = useHistory();
  const onClick = () => {
    history.push(`/post/${_id}`);
  };
  return (
    <Container onClick={onClick}>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </Container>
  );
}

export default Post;
