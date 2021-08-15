import React, { useEffect } from 'react';
import Users from '../../components/user/Users';
import LoadAsync from '../../components/LoadAsync';

import { useSelector, useDispatch } from 'react-redux';
import {
  selectFollowers,
  selectGetFollowersError,
  selectGetFollowersStatus,
  getFollowers,
} from '../../store/slices/userSlice';

function Followers({ username }) {
  const dispatch = useDispatch();
  const followers = useSelector(selectFollowers);
  const status = useSelector(selectGetFollowersStatus);
  const error = useSelector(selectGetFollowersError);

  useEffect(() => {
    dispatch(getFollowers(username));
  }, [dispatch, username]);

  return (
    <LoadAsync loading={status === 'loading'} error={error}>
      <Users users={followers}></Users>
    </LoadAsync>
  );
}

export default Followers;
