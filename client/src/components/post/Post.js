import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import UserDisplay from '../user/UserDisplay';
import PostControl from './PostControl';
import { FaRegHeart } from 'react-icons/fa';

import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { likePost } from '../../APIUtils';
import { selectToken, selectUser } from '../../store/slices/authSlice';

const hoverStyles = css`
  background-color: ${({ theme }) => theme.clrs.neutral[200]};
`;

const Container = styled.div`
  font-size: ${(props) => (props.em ? '1.4rem' : '1rem')};
  padding: ${({ theme }) => theme.padding.main};

  border-bottom: 1px solid ${({ theme }) => theme.clrs.neutral[300]};
  & > * + * {
    margin-top: 0.5em;
  }

  transition: background-color 0.2s ease-out;
  cursor: ${(props) => (props.clickable ? 'pointer' : 'auto')};

  &:hover {
    ${(props) => props.clickable && hoverStyles};
  }
`;

const Text = styled.p`
  white-space: pre-wrap;
`;

const Controls = styled.div`
  display: flex;
  justify-content: space-between;
`;

function Post({ text, user, onClick, _id, likes, em }) {
  const clickable = onClick !== undefined;

  const token = useSelector(selectToken);
  const authUser = useSelector(selectUser);

  const [numLikes, setNumLikes] = useState(likes.length);
  const [userLikes, setUserLikes] = useState(likes.includes(authUser._id));

  const onLike = async (e) => {
    e.stopPropagation();
    try {
      const res = await likePost(_id, token);
      if (res.data.likes) {
        setNumLikes(numLikes + 1);
        setUserLikes(true);
      } else {
        setNumLikes(numLikes - 1);
        setUserLikes(false);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const history = useHistory();
  const routeToUser = (e) => {
    e.stopPropagation();
    history.push(`/users/${user.username}`);
  };
  return (
    <Container onClick={onClick} clickable={clickable} em={em}>
      <UserDisplay user={user} onClick={routeToUser} />
      <Text> {text}</Text>
      <Controls>
        <PostControl
          icon={<FaRegHeart />}
          onClick={onLike}
          active={userLikes}
          value={likes.length}
        ></PostControl>
      </Controls>
    </Container>
  );
}

export default Post;
