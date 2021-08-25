import styled from 'styled-components';

const Label = styled.label`
  display: block;
  width: 100%;
  height: max-content;

  font-size: 1rem;

  & > * + * {
    margin-top: 4px;
  }
`;

export default Label;
