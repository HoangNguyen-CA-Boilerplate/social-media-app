import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const activeStyles = css`
  color: ${({ theme }) => theme.clrs.neutral[900]};
  border-bottom: 4px solid ${({ theme }) => theme.clrs.primary[500]};
`;

const FlexLink = styled(Link)`
  width: 100%;
  padding: 1em;
  text-align: center;
  text-decoration: none;
  color: ${({ theme }) => theme.clrs.neutral[600]};
  &:hover {
    background-color: ${({ theme }) => theme.clrs.neutral[400]};
  }
  border-bottom: 4px solid transparent;

  ${(props) => props.$active && activeStyles}
`;

export const FlexLinkContainer = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.clrs.neutral[300]};
`;

export default FlexLink;
