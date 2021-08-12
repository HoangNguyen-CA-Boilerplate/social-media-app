import React, { useState } from 'react';

import styled, { css } from 'styled-components';
import UserDisplay from '../user/UserDisplay';
import LikeControl from './LikeControl';
import DeleteControl from './DeleteControl';

import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import useTokenConfig from '../../hooks/useTokenConfig';

import { selectUser } from '../../store/slices/authSlice';

const clickableStyles = css`
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

function Post({ text, user, _id, likes, em, onDelete }) {
  const history = useHistory();
  const tokenConfig = useTokenConfig();
  const authUser = useSelector(selectUser);
  const [hide, setHide] = useState(false);

  const clickable = history.location.pathname !== `/posts/${_id}`;
  const routeToPost = () => {
    if (clickable) history.push(`/posts/${_id}`);
  };
  const routeToUser = (e) => {
    e.stopPropagation();
    history.push(`/users/${user.username}`);
  };

  const handleDelete = () => {
    if (onDelete) onDelete();
    else setHide(true);
  };

  if (hide) return null;

  return (
    <Container onClick={routeToPost} clickable={clickable} em={em}>
      <UserDisplay user={user} onClick={routeToUser} />
      <Text> {text}</Text>
      <Controls>
        <LikeControl
          postId={_id}
          userLikes={likes.includes(authUser._id)}
          numLikes={likes.length}
          tokenConfig={tokenConfig}
        ></LikeControl>
        {authUser._id === user._id && (
          <DeleteControl
            postId={_id}
            tokenConfig={tokenConfig}
            onDelete={handleDelete}
          ></DeleteControl>
        )}
      </Controls>
    </Container>
  );
}

export default Post;
