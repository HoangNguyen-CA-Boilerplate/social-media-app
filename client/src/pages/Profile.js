import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Layout from '../components/Layout';
import Spinner from '../components/Spinner';

import { getUser } from './APIUtils';

import { useSelector } from 'react-redux';
import { selectUser } from '../store/slices/authSlice';

function Profile() {
  const { username } = useParams();

  const authUser = useSelector(selectUser);
  let auth = false;

  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);

  if (authUser._id === user?._id) auth = true;

  let element;
  if (error) {
    element = <h1>Profile Not Found!</h1>;
  } else if (!user) {
    element = <Spinner />;
  } else {
    element = (
      <>
        <h2>{user.displayName}</h2>
        <p>@{user.username}</p>
        <h1>{auth && 'Auth'}</h1>
      </>
    );
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(false);
        const res = await getUser(username);
        setUser(res.data);
      } catch (e) {
        setError(true);
      }
    };

    fetchData();
  }, [username]);
  return <Layout header={username}>{element}</Layout>;
}

export default Profile;
