import styled, { css } from 'styled-components';

const defaultStyles = css`
  background-color: ${({ theme }) => theme.clrs.primary[500]};
  color: ${({ theme }) => theme.clrs.neutral[100]};

  &:hover {
    background-color: ${({ theme }) => theme.clrs.primary[600]};
  }
`;

const emptyStyles = css`
  background-color: ${({ theme }) => theme.clrs.neutral[100]};
  color: ${({ theme }) => theme.clrs.primary[500]};

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
  border-radius: 1000px;
  display: block;

  outline: none;
  border: 1px solid ${({ theme }) => theme.clrs.primary[500]};

  width: ${(props) => (props.$fill ? '100%' : 'auto')};
  padding: ${({ theme }) => theme.padding.button};

  cursor: pointer;
  transition: 0.1s ease-out;

  text-decoration: none;

  ${(props) => props.small && smallStyles}
  ${(props) => (props.empty ? emptyStyles : defaultStyles)}
`;

export default Button;
