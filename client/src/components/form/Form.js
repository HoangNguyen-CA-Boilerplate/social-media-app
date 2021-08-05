import styled from 'styled-components';

const Form = styled.form`
  & > * + * {
    margin-top: 1.5em;
  }

  width: 100%;

  & > button {
    font-size: 1.2rem;
  }
`;

export default Form;
