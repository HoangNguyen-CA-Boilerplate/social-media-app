import React from 'react';

import styled, { css } from 'styled-components';
import UserPreview from '../user/UserPreview';
import LikeControl from './LikeControl';
import DeleteControl from './DeleteControl';

import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { selectUser } from '../../store/slices/authSlice';

export const clickableStyles = css`
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.clrs.neutral[200]};
  }
`;

const Container = styled.div`
  font-size: ${(props) => (props.em ? '1.4rem' : '1rem')};

  padding: ${({ theme }) => theme.padding.main};
  border-bottom: 1px solid ${({ theme }) => theme.clrs.neutral[300]};

  transition: background-color 0.2s ease-out;

  & > * + * {
    margin-top: 0.5em;
  }

  ${(props) => props.clickable && clickableStyles}
`;

const Text = styled.p`
  white-space: pre-wrap;
`;

const Controls = styled.div`
  display: flex;
  justify-content: space-between;
`;

function Post({ text, user, _id, likes, onDelete, onLike, em }) {
  const history = useHistory();
  const authUser = useSelector(selectUser);

  const clickable = history.location.pathname !== `/posts/${_id}`;

  const routeToPost = () => {
    if (clickable) history.push(`/posts/${_id}`);
  };

  const routeToUser = (e) => {
    e.stopPropagation();
    history.push(`/users/${user.username}`);
  };

  return (
    <Container onClick={routeToPost} clickable={clickable} em={em}>
      <UserPreview user={user} onClick={routeToUser} />
      <Text> {text}</Text>
      <Controls>
        <LikeControl
          userLikes={likes.includes(authUser._id)}
          numLikes={likes.length}
          onLike={onLike}
        ></LikeControl>
        {authUser._id === user._id && (
          <DeleteControl onDelete={onDelete}></DeleteControl>
        )}
      </Controls>
    </Container>
  );
}

export default Post;
