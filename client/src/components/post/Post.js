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

function Post({ text, user, onClick, _id, likes }) {
  const clickable = onClick !== undefined;

  const token = useSelector(selectToken);
  const authUser = useSelector(selectUser);

  const [likesNum, setLikesNum] = useState(likes.length);
  const [userLiked, setUserLiked] = useState(likes.includes(authUser._id));

  const onLike = async (e) => {
    e.stopPropagation();
    try {
      const res = await likePost(_id, token);
      const resLikes = res.data.likes;
      if (resLikes) {
        setLikesNum(likesNum + 1);
        setUserLiked(true);
      } else {
        setLikesNum(likesNum - 1);
        setUserLiked(false);
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
    <Container onClick={onClick} clickable={clickable}>
      <UserDisplay user={user} onClick={routeToUser} />
      <Text> {text}</Text>
      <Controls>
        <PostControl
          icon={<FaRegHeart />}
          onClick={onLike}
          active={userLiked}
          value={likesNum}
        ></PostControl>
      </Controls>
    </Container>
  );
}

export default Post;
