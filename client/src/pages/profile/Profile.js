import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Spinner from '../../components/Spinner';
import ProfileDisplay from './ProfileDisplay';
import Post from '../../components/post/Post';

import { getUser, getUserPosts } from '../../APIUtils';

import { useSelector } from 'react-redux';
import { selectUser } from '../../store/slices/authSlice';

function Profile() {
  const { username } = useParams();

  const authUser = useSelector(selectUser);
  let auth = false;

  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);
  const [posts, setPosts] = useState([]);

  if (authUser._id === user?._id) auth = true;

  let element;
  if (error) {
    element = <h1>Profile Not Found!</h1>;
  } else if (!user) {
    element = <Spinner />;
  } else {
    element = (
      <>
        <ProfileDisplay user={user} auth={auth}></ProfileDisplay>{' '}
        {posts.map(({ _id, ...fields }) => {
          return <Post key={_id} _id={_id} {...fields}></Post>;
        })}
      </>
    );
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(false);
        const res = await getUser(username);
        setUser(res.data);

        const resPosts = await getUserPosts(username);
        setPosts(resPosts.data);
      } catch (e) {
        setError(true);
      }
    };

    fetchData();
  }, [username]);
  return <>{element}</>;
}

export default Profile;
