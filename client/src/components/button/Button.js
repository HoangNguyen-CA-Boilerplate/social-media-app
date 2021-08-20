import styled, { css } from 'styled-components';

const defaultStyles = css`
  color: ${({ theme }) => theme.clrs.neutral[100]};
  background-color: ${({ theme }) => theme.clrs.primary[500]};
  border: 1px solid ${({ theme }) => theme.clrs.primary[500]};

  &:hover {
    background-color: ${({ theme }) => theme.clrs.primary[600]};
  }
`;

const emptyStyles = css`
  color: ${({ theme }) => theme.clrs.primary[500]};
  background-color: ${({ theme }) => theme.clrs.neutral[100]};
  border: 1px solid ${({ theme }) => theme.clrs.primary[500]};

  &:hover {
    background-color: ${({ theme }) => theme.clrs.neutral[200]};
  }
`;

const smallStyles = css`
  padding: ${({ theme }) => theme.padding.buttonSmall};
`;

const Button = styled.button.attrs((props) => ({
  type: props.submit ? 'submit' : 'button',
}))`
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;

  display: block;
  width: ${(props) => (props.$fill ? '100%' : 'auto')};
  padding: ${({ theme }) => theme.padding.button};
  border-radius: 1000px;

  cursor: pointer;
  transition: 0.1s ease-out;

  ${(props) => props.small && smallStyles}
  ${(props) => (props.empty ? emptyStyles : defaultStyles)}

  outline: none;
  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.clrs.primary[200]};
  }
`;

export default Button;
