import React from 'react';
import styled, { css } from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const linkStyles = css`
  width: max-content;
  padding: ${({ theme }) => theme.padding.navLink};
  border: none;
  border-radius: 1000px;

  color: ${(props) =>
    props.$active
      ? props.theme.clrs.primary[500]
      : props.theme.clrs.neutral[900]};
  background-color: transparent;

  cursor: pointer;

  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.1s ease-out;

  & > * + * {
    margin-left: 0.5em;
  }

  &:hover {
    background-color: ${({ theme }) => theme.clrs.primary[100]};
    color: ${({ theme }) => theme.clrs.primary[500]};
  }

  outline: none;
  &:focus {
    box-shadow: 0 0 0 2px currentColor;
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
  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: none;
  }
`;

function NavLink({ to, icon, children, ...props }) {
  const location = useLocation();

  const active = location.pathname === to;

  let linkElement = (
    <ButtonLink {...props}>
      {icon}
      <NavText>{children}</NavText>
    </ButtonLink>
  );

  if (to) {
    linkElement = (
      <StyledLink to={to} {...props} $active={active}>
        {icon}
        {children && <NavText>{children}&nbsp;&nbsp;</NavText>}
      </StyledLink>
    );
  }

  return linkElement;
}

export default NavLink;
