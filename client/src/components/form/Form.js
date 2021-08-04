import styled from 'styled-components';

const Form = styled.form`
  & > * + * {
    margin-top: 1.5em;
  }

  width: 100%;
`;

export default Form;
