import styled, { css } from 'styled-components';

const defaultStyles = css`
  color: ${({ theme }) => theme.clrs.neutral[100]};
  background-color: ${({ theme }) => theme.clrs.primary[500]};
  border: 1px solid ${({ theme }) => theme.clrs.primary[500]};

  &:hover {
    background-color: ${({ theme }) => theme.clrs.primary[600]};
  }
  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.clrs.primary[200]};
  }
`;

const emptyStyles = css`
  color: ${({ theme }) => theme.clrs.primary[500]};
  background-color: ${({ theme }) => theme.clrs.neutral[100]};
  border: 1px solid ${({ theme }) => theme.clrs.primary[500]};

  &:hover {
    background-color: ${({ theme }) => theme.clrs.neutral[200]};
  }
  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.clrs.primary[200]};
  }
`;

const dangerStyles = css`
  color: ${({ theme }) => theme.clrs.neutral[100]};
  background-color: ${({ theme }) => theme.clrs.accent1[500]};
  border: 1px solid ${({ theme }) => theme.clrs.accent1[500]};

  &:hover {
    background-color: ${({ theme }) => theme.clrs.accent1[700]};
  }
  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.clrs.accent1[100]};
  }
`;

const handleType = (type) => {
  switch (type) {
    case 'empty':
      return emptyStyles;
    case 'danger':
      return dangerStyles;
    default:
      return defaultStyles;
  }
};

const Button = styled.button.attrs((props) => ({
  type: props.submit ? 'submit' : 'button',
}))`
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;

  display: block;
  width: ${(props) => (props.$fill ? '100%' : 'auto')};
  padding: ${(props) =>
    props.small ? props.theme.padding.buttonSmall : props.theme.padding.button};
  border-radius: 1000px;

  cursor: pointer;
  transition: 0.1s ease-out;

  ${({ $type }) => handleType($type)};

  outline: none;
`;

export default Button;
