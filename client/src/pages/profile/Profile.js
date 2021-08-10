import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Spinner from '../../components/Spinner';
import ProfileDisplay from './ProfileDisplay';

import { getUser } from '../../APIUtils';

import { useSelector } from 'react-redux';
import { selectUser } from '../../store/slices/authSlice';

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
    element = <ProfileDisplay user={user} auth={auth}></ProfileDisplay>;
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
  return element;
}

export default Profile;
