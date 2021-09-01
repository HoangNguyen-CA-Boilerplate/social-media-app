import React, { useEffect } from 'react';

import ProfileDisplay from './ProfileDisplay';
import ProfilePosts from './ProfilePosts';
import ProfileLikedPosts from './ProfileLikedPosts';
import PageNotFound from '../PageNotFound';
import LoadAsync from '../../components/loadAsync/LoadAsync';
import LayoutHeader from '../../components/layout/LayoutHeader';
import FlexLink, { FlexLinkContainer } from '../../components/button/FlexLink';

import { useSelector, useDispatch } from 'react-redux';
import {
  selectUser,
  selectUserStatus,
  selectUserError,
  getUser,
  followUser,
} from '../../store/slices/userSlice';

import { selectUser as selectAuthUser } from '../../store/slices/authSlice';
import { useRouteMatch, Switch, Route } from 'react-router-dom';

function Profile({ username }) {
  const dispatch = useDispatch();
  const { path, url } = useRouteMatch();

  useEffect(() => {
    dispatch(getUser({ username }));
  }, [dispatch, username]);

  const user = useSelector(selectUser);
  const userStatus = useSelector(selectUserStatus);
  const userError = useSelector(selectUserError);

  const authUser = useSelector(selectAuthUser);

  const onFollow = () => {
    dispatch(followUser(username));
  };

  return (
    <>
      <LayoutHeader>{username}</LayoutHeader>
      <LoadAsync
        loading={userStatus === 'loading' || userStatus === 'initial'}
        error={userError}
      >
        <ProfileDisplay
          user={user}
          authUser={authUser}
          onFollow={onFollow}
        ></ProfileDisplay>
      </LoadAsync>

      <FlexLinkContainer>
        <FlexLink to={url}>Posts</FlexLink>
        <FlexLink to={`${url}/likes`}>Likes</FlexLink>
      </FlexLinkContainer>

      <Switch>
        <Route exact path={path}>
          <ProfilePosts username={username} />
        </Route>
        <Route exact path={`${path}/likes`}>
          <ProfileLikedPosts username={username} />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </>
  );
}

export default Profile;
