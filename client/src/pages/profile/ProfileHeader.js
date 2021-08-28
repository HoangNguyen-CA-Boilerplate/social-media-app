import React from 'react';
import styled from 'styled-components';

const DisplayName = styled.h2`
  font-weight: 700;
  font-size: 1.5rem;
`;

const Username = styled.p`
  color: ${({ theme }) => theme.clrs.neutral[600]};
`;

function ProfileHeader({ user }) {
  return (
    <div>
      <DisplayName>{user.displayName}</DisplayName>
      <Username>@{user.username}</Username>
    </div>
  );
}

export default ProfileHeader;
