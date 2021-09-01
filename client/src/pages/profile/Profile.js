import React, { useEffect } from 'react';

import ProfileDisplay from './ProfileDisplay';
import Posts from '../../components/post/Posts';
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

import {
  getPosts,
  deletePost,
  likePost,
  selectUserPostsStatus,
  selectUserPosts,
  selectUserPostsError,
} from '../../store/slices/userPostsSlice.js';

import { selectUser as selectAuthUser } from '../../store/slices/authSlice';
import { useRouteMatch, Switch, Route } from 'react-router-dom';

function Profile({ username }) {
  const dispatch = useDispatch();
  const { path, url } = useRouteMatch();

  useEffect(() => {
    dispatch(getUser({ username }));
    dispatch(getPosts({ username }));
  }, [dispatch, username]);

  const user = useSelector(selectUser);
  const userStatus = useSelector(selectUserStatus);
  const userError = useSelector(selectUserError);

  const posts = useSelector(selectUserPosts);
  const postsStatus = useSelector(selectUserPostsStatus);
  const postsError = useSelector(selectUserPostsError);

  const authUser = useSelector(selectAuthUser);

  const onLikePost = (id) => {
    dispatch(likePost(id));
  };

  const onDeletePost = (id) => {
    dispatch(deletePost(id));
  };

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
          <LoadAsync loading={postsStatus === 'loading'} error={postsError}>
            <Posts posts={posts} onLike={onLikePost} onDelete={onDeletePost} />
          </LoadAsync>
        </Route>
        <Route exact path={`${path}/likes`}></Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </>
  );
}

export default Profile;
