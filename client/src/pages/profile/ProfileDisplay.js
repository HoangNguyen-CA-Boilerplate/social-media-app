import React from 'react';
import styled from 'styled-components';
import Avatar from '../../components/user/Avatar';
import Button from '../../components/Button';

import { FaRegCalendarAlt } from 'react-icons/fa';

const Cover = styled.div`
  background-color: ${({ theme }) => theme.clrs.neutral[400]};
  width: 100%;
  padding-top: 10%;
  position: relative;
  padding-left: ${({ theme }) => theme.padding.main};
`;

const ProfileAvatar = styled(Avatar)`
  font-size: 4rem;
  transform: translateY(50%);
`;

const Controls = styled.div`
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
    margin-top: 0.5em;
  }
`;

const DisplayName = styled.h2`
  font-weight: 700;
  font-size: 1.5rem;
`;
const Username = styled.p`
  color: ${({ theme }) => theme.clrs.neutral[600]};
`;

const DateContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.clrs.neutral[600]};

  & > * {
    display: block;
  }
  & > * + * {
    margin-left: 0.5em;
  }
`;

const FollowContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.clrs.neutral[600]};
  & > * + * {
    margin-left: 1em;
  }
`;

const Bold = styled.span`
  font-weight: 700;
  color: ${({ theme }) => theme.clrs.neutral[900]};
`;

const Follow = styled.a`
  border-bottom: 1px solid transparent;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

function ProfileDisplay({ user, authUser, onFollow }) {
  const following = user.followers.includes(authUser._id);
  return (
    <>
      <Cover>
        <ProfileAvatar></ProfileAvatar>
      </Cover>
      <Controls>
        {authUser._id === user._id ? (
          <Button empty>Edit Profile</Button>
        ) : (
          <Button empty={!following} onClick={onFollow}>
            {following ? 'Following' : 'Follow'}
          </Button>
        )}
      </Controls>
      <Main>
        <div>
          <DisplayName>{user.displayName}</DisplayName>
          <Username>@{user.username}</Username>
        </div>
        <DateContainer>
          <FaRegCalendarAlt />
          <time>Joined {new Date(user.createdAt).toDateString()}</time>
        </DateContainer>
        <FollowContainer>
          <Follow>
            <Bold>{user.followers.length}</Bold> Follower
            {user.followers.length === 1 ? '' : 's'}
          </Follow>
          <Follow>
            <Bold>{user.followings.length}</Bold> Following
          </Follow>
        </FollowContainer>
      </Main>
    </>
  );
}

export default ProfileDisplay;
