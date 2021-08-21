import React from 'react';
import PostControl from './PostControl';
import { FaRegHeart } from 'react-icons/fa';

function LikeControl({ userLikes, numLikes, onClick }) {
  const handleLike = async (e) => {
    e.stopPropagation();
    onClick();
  };

  return (
    <PostControl
      icon={<FaRegHeart />}
      onClick={handleLike}
      active={userLikes}
      label={numLikes}
    ></PostControl>
  );
}

export default LikeControl;
