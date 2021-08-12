import React from 'react';
import PostControl from './PostControl';
import { FaRegHeart } from 'react-icons/fa';
import { likePost } from '../../APIUtils';

import useAsyncFn from '../../hooks/useAsyncFn';

function LikeControl({ userLikes, numLikes, postId, tokenConfig }) {
  const [state, execute] = useAsyncFn(likePost, { userLikes, numLikes });

  const onLike = async (e) => {
    e.stopPropagation();
    await execute(postId, tokenConfig);
  };

  return (
    <PostControl
      icon={<FaRegHeart />}
      onClick={onLike}
      active={state.data.userLikes}
      label={state.data.numLikes}
    ></PostControl>
  );
}

export default LikeControl;
