import React from 'react';
import styled from 'styled-components';

import { FaRegCalendarAlt } from 'react-icons/fa';

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
function ProfileDate({ date }) {
  return (
    <DateContainer>
      <FaRegCalendarAlt />
      <time>Joined {new Date(date).toDateString()}</time>
    </DateContainer>
  );
}

export default ProfileDate;
