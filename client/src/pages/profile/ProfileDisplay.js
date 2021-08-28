import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import Avatar from '../../components/user/Avatar';
import Button from '../../components/button/Button';
import FollowLinks from './FollowLinks';
import ProfileEditModal from './ProfileEditModal';
import ProfileDate from './ProfileDate';
import ProfileHeader from './ProfileHeader';

const Cover = styled.div`
  background-color: ${({ theme }) => theme.clrs.neutral[400]};
  width: 100%;
  padding-top: 30%;
`;

const ProfileAvatar = styled(Avatar)`
  font-size: 4rem;
  position: absolute;
  left: ${({ theme }) => theme.padding.main};
  bottom: ${({ theme }) => theme.padding.main};

  @media ${({ theme }) => theme.breakpoints.tablet} {
    font-size: 3rem;
  }
  @media ${({ theme }) => theme.breakpoints.mobile} {
    font-size: 2.5rem;
  }
`;

const Top = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: ${({ theme }) => theme.padding.main};
  z-index: 1;
`;

const Main = styled.div`
  padding: 0 ${({ theme }) => theme.padding.main}
    ${({ theme }) => theme.padding.main} ${({ theme }) => theme.padding.main};
  border-bottom: 1px solid ${({ theme }) => theme.clrs.neutral[400]};

  & > * + * {
    margin-top: 0.7em;
  }
`;

const Bio = styled.p``;

function ProfileDisplay({ user, authUser, onFollow }) {
  const [followers, setFollowers] = useState(user.followers);
  const [editOpen, setEditOpen] = useState(false);

  useEffect(() => {
    setFollowers(user.followers);
  }, [user]);

  const handleFollow = () => {
    onFollow();

    if (user.followers.includes(authUser._id)) {
      setFollowers(user.followers.filter((id) => id !== authUser._id));
    } else {
      setFollowers([...user.followers, authUser._id]);
    }
  };

  return (
    <>
      <ProfileEditModal
        show={editOpen}
        close={() => setEditOpen(false)}
        user={user}
      />
      <Cover></Cover>
      <Top>
        <ProfileAvatar></ProfileAvatar>

        {authUser._id === user._id ? (
          <Button $type='empty' onClick={() => setEditOpen(true)}>
            Edit Profile
          </Button>
        ) : (
          <Button
            $type={followers.includes(authUser._id) ? null : 'empty'}
            onClick={handleFollow}
          >
            {followers.includes(authUser._id) ? 'Following' : 'Follow'}
          </Button>
        )}
      </Top>
      <Main>
        <ProfileHeader user={user} />
        {user?.bio && <Bio>{user.bio}</Bio>}
        <ProfileDate date={user.createdAt} />
        <FollowLinks user={user} />
      </Main>
    </>
  );
}

export default ProfileDisplay;
