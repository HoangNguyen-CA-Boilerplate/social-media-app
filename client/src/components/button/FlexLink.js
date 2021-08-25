import React from 'react';

import styled, { css } from 'styled-components';
import { useHistory } from 'react-router-dom';

const activeStyles = css`
  color: ${({ theme }) => theme.clrs.neutral[900]};
  border-bottom: 4px solid ${({ theme }) => theme.clrs.primary[500]};
`;

const StyledLink = styled.button`
  width: 100%;
  padding: 1em;

  text-align: center;
  text-decoration: none;

  cursor: pointer;

  color: ${({ theme }) => theme.clrs.neutral[600]};
  background-color: ${({ theme }) => theme.clrs.neutral[100]};
  &:hover {
    background-color: ${({ theme }) => theme.clrs.neutral[400]};
  }

  border: none;
  border-bottom: 4px solid transparent;

  ${(props) => props.$active && activeStyles}
`;

export const FlexLinkContainer = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.clrs.neutral[300]};
`;

function FlexLink({ to, ...props }) {
  const history = useHistory();

  const onClick = () => {
    history.replace(to);
  };

  return (
    <StyledLink
      {...props}
      $active={history.location.pathname === to}
      onClick={onClick}
    ></StyledLink>
  );
}

export default FlexLink;
