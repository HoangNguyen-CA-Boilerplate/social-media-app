import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPosts, selectPosts } from '../store/slices/postSlice';

function Home() {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <div>
      <h1>Home</h1>
      {posts.map(({ title, text }) => (
        <h1>
          {title} {text}
        </h1>
      ))}
    </div>
  );
}

export default Home;
