import React, { useState } from 'react';
import PostControl from './PostControl';
import { FaRegHeart } from 'react-icons/fa';
import { likePost } from '../../APIUtils';

function LikeControl({ likes, postId, authUser, token }) {
  const [numLikes, setNumLikes] = useState(likes.length);
  const [userLikes, setUserLikes] = useState(likes.includes(authUser._id));

  const onLike = async (e) => {
    e.stopPropagation();
    try {
      const res = await likePost(postId, token);
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

  return (
    <PostControl
      icon={<FaRegHeart />}
      onClick={onLike}
      active={userLikes}
      label={numLikes}
    ></PostControl>
  );
}

export default LikeControl;
