import React from 'react';
import styled, { css } from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const linkStyles = css`
  width: max-content;
  padding: ${({ theme }) => theme.padding.button};
  border-radius: 1000px;
  color: ${(props) =>
    props.$active
      ? props.theme.clrs.primary[500]
      : props.theme.clrs.neutral[900]};
  border: none;
  background-color: transparent;

  cursor: pointer;

  font-size: 1.3rem;
  font-weight: 700;
  text-decoration: none;

  display: flex;
  align-items: center;

  & > * + * {
    margin-left: 0.5em;
  }

  transition: 0.1s ease-out;

  &:hover {
    background-color: ${({ theme }) => theme.clrs.primary[100]};
    color: ${({ theme }) => theme.clrs.primary[500]};
  }
`;

const ButtonLink = styled.button.attrs({ type: 'button' })`
  ${linkStyles}
`;

const StyledLink = styled(Link)`
  ${linkStyles}
`;

const NavText = styled.p`
  line-height: 100%;
`;

function NavLink({ to, icon, children, ...props }) {
  const location = useLocation();

  const getActive = () => {
    if (location.pathname === to) return true;
    return false;
  };

  let linkElement = (
    <ButtonLink {...props}>
      {icon}
      <NavText>{children}</NavText>
    </ButtonLink>
  );

  if (to) {
    linkElement = (
      <StyledLink to={to} {...props} $active={getActive()}>
        {icon}
        <NavText>{children}</NavText>
      </StyledLink>
    );
  }

  return linkElement;
}

export default NavLink;
