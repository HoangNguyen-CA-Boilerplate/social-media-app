import React from 'react';

import PostControl from './PostControl';

import { RiDeleteBin5Line } from 'react-icons/ri';

function DeleteControl({ onClick }) {
  const handleDelete = (e) => {
    e.stopPropagation();
    onClick();
  };
  return (
    <PostControl
      icon={<RiDeleteBin5Line />}
      onClick={handleDelete}
    ></PostControl>
  );
}

export default DeleteControl;
