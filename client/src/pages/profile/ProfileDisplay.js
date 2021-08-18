import React from 'react';

import styled from 'styled-components';
import Avatar from '../../components/user/Avatar';
import Button from '../../components/button/Button';
import FollowDisplay from './FollowDisplay';

import { FaRegCalendarAlt } from 'react-icons/fa';

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

function ProfileDisplay({ user, authUser, onFollow }) {
  const following = user.followers.includes(authUser._id);
  return (
    <>
      <Cover></Cover>
      <Top>
        <ProfileAvatar></ProfileAvatar>

        {authUser._id === user._id ? (
          <Button empty>Edit Profile</Button>
        ) : (
          <Button empty={!following} onClick={onFollow}>
            {following ? 'Following' : 'Follow'}
          </Button>
        )}
      </Top>
      <Main>
        <div>
          <DisplayName>{user.displayName}</DisplayName>
          <Username>@{user.username}</Username>
        </div>

        <DateContainer>
          <FaRegCalendarAlt />
          <time>Joined {new Date(user.createdAt).toDateString()}</time>
        </DateContainer>

        <FollowDisplay user={user} />
      </Main>
    </>
  );
}

export default ProfileDisplay;
