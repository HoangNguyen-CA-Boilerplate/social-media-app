import React, { useEffect } from 'react';
import Users from '../../components/user/Users';
import LoadAsync from '../../components/LoadAsync';
import LayoutMessage from '../../components/layout/LayoutMessage';

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
      {followers.length === 0 ? (
        <LayoutMessage sub="When someone follows them, they'll be listed here.">
          @{username} doesn't have any followers
        </LayoutMessage>
      ) : (
        <Users users={followers}></Users>
      )}
    </LoadAsync>
  );
}

export default Followers;
