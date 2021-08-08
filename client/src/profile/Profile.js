import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Layout from '../components/Layout';
import { getUser } from './APIUtils';
import Spinner from '../components/Spinner';
import { useSelector } from 'react-redux';
import { selectUser } from '../store/slices/authSlice';

function Profile() {
  const { username } = useParams();

  const authUser = useSelector(selectUser);

  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  let element;
  if (error) {
    element = error;
  } else if (!user) {
    element = <Spinner />;
  } else {
    element = (
      <>
        <h2>{user.displayName}</h2>
        <p>@{user.username}</p>
      </>
    );
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getUser(username);
        setUser(res.data);
        console.log(res.data);
      } catch (e) {
        setError(e.response.data.error);
      }
    };

    fetchData();
  }, [username]);
  return <Layout header={username}>{element}</Layout>;
}

export default Profile;
