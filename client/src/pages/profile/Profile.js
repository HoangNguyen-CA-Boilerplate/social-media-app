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
  selectUserPosts,
  likeUserPost,
  deleteUserPost,
  getUserPosts,
  getUser,
  followUser,
  selectUserPostsStatus,
} from '../../store/slices/userSlice';
import { selectUser as selectAuthUser } from '../../store/slices/authSlice';
import { useRouteMatch, Switch, Route } from 'react-router-dom';

function Profile({ username }) {
  const dispatch = useDispatch();
  const { path, url } = useRouteMatch();

  useEffect(() => {
    dispatch(getUser({ username }));
    dispatch(getUserPosts({ username }));
  }, [dispatch, username]);

  const user = useSelector(selectUser);
  const userStatus = useSelector(selectUserStatus);
  const userError = useSelector(selectUserError);

  const posts = useSelector(selectUserPosts);
  const postsStatus = useSelector(selectUserPostsStatus);

  const authUser = useSelector(selectAuthUser);

  const onLikePost = (id) => {
    dispatch(likeUserPost(id));
  };

  const onDeletePost = (id) => {
    dispatch(deleteUserPost(id));
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
          <LoadAsync loading={postsStatus === 'loading'}>
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
