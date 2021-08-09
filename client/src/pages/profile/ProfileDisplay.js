import React from 'react';
import styled from 'styled-components';
import Avatar from '../../components/user/Avatar';
import Button from '../../components/Button';

const Cover = styled.div`
  background-color: ${({ theme }) => theme.clrs.neutral[400]};
  width: 100%;
  padding-top: 10%;
  position: relative;
  padding-left: ${({ theme }) => theme.padding.main};
`;

const ProfileAvatar = styled(Avatar)`
  font-size: 4.5rem;
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
`;

const DisplayName = styled.h2`
  font-weight: 700;
  font-size: 1.5rem;
`;
const Username = styled.p`
  color: ${({ theme }) => theme.clrs.neutral[600]};
`;

function ProfileDisplay({ user, auth }) {
  return (
    <>
      <Cover>
        <ProfileAvatar></ProfileAvatar>
      </Cover>
      <Controls>
        {auth ? (
          <Button empty>Edit Profile</Button>
        ) : (
          <Button empty>Follow</Button>
        )}
      </Controls>
      <Main>
        <DisplayName>{user.displayName}</DisplayName>
        <Username>@{user.username}</Username>
      </Main>
    </>
  );
}

export default ProfileDisplay;
